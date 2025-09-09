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
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});

defineEmits(['add-cucumber']);
</script>
