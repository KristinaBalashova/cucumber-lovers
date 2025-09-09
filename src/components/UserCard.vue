<script setup lang="ts">
import { ref, watch } from 'vue';
import { Fireworks } from '@fireworks-js/vue';
import { User } from '@/composables/useUsers';

const props = defineProps<{
  user: User;
}>();

defineEmits(['add-cucumber']);

const showFireworks = ref<boolean>(false);

const fireworksOptions = {
  x: ['0%', '100%'],
  y: ['0%', '100%'],
  intensity: 10,
  speed: 1.5,
  particles: 30,
};

watch(() => props.user.cucumbersCount, (newCount: number) => {
  if (newCount > 0 && newCount % 100 === 0) {
    showFireworks.value = true;

    setTimeout(() => {
      showFireworks.value = false;
    }, 5000);
  }
});

</script>

<template>
  <div class="user-card">
    <div class="user-card__header">
      <span class="user-card__name">{{ user.name }}</span>
      <span class="user-card__count"
        >{{ user.cucumbersCount }} <span class="cucumber-glow">🥒</span></span
      >
    </div>
    <button class="btn btn--secondary" @click="$emit('add-cucumber', user.id)">
      Добавить огурец
    </button>
    <div v-if="showFireworks" class="fireworks-overlay">
      <Fireworks :options="fireworksOptions" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.fireworks-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>