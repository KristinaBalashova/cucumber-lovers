<script setup>
import { ref, computed } from 'vue';
import UserCard from '@/components/UserCard.vue';
import ChampionCard from '@/components/ChampionCard.vue';

const users = ref([
  { id: 1, name: 'Иван Огурцов', cucumbersCount: 12 },
  { id: 2, name: 'Елена Зеленцова', cucumbersCount: 3 },
  { id: 3, name: 'Петр Рассолов', cucumbersCount: 9 },
  { id: 4, name: 'Мария Маринова', cucumbersCount: 4 },
]);

const sortedUsers = computed(() =>
  [...users.value].sort((a, b) => {
    if (a.cucumbersCount === b.cucumbersCount) {
      return b.name.length - a.name.length;
    }
    return b.cucumbersCount - a.cucumbersCount;
  }),
);

const champion = computed(() => sortedUsers.value[0]);

const addCucumber = (userId) => {
  const user = users.value.find((u) => u.id === userId);
  if (user) {
    user.cucumbersCount += 1;
  }
};
</script>

<template>
  <div class="container">
    <div>
      <ChampionCard :champion="champion" />
    </div>
    <div class="list basic-grid">
      <UserCard
        v-for="user in sortedUsers"
        :key="user.id"
        :user="user"
        @add-cucumber="addCucumber"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include flex-column;
  gap: 20px;
  padding: 20px;
}

.list {
  @include basic-grid;
  width: 100%;
}
</style>
