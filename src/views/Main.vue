<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';
import ChampionCard from '@/components/ChampionCard.vue';
import { useUsers } from '@/composables/useUsers';

const { sortedUsers, champion, addCucumber } = useUsers();
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
  @include flex-center(column);
  gap: 20px;
  padding: 20px;
}

.list {
  @include basic-grid;
  width: 100%;
}
</style>
