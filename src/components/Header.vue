<script setup>
import { useTheme } from '@/composables/useTheme';

const { nextTheme, toggleTheme } = useTheme();
</script>

<template>
  <header class="header">
    <div class="logo">
      <span class="cucumber-glow"><span class="cucumber-glow">🥒</span></span> CucumbClub
    </div>
    <button @click="toggleTheme" class="btn btn--secondary">
      {{ nextTheme }}
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @include flex-between;
  padding: 20px 40px;
  background-color: var(--card-background-color);
  border-bottom: 1px solid var(--card-border-color);
  box-shadow: var(--box-shadow);
}

.logo {
  font-family: $font-family-headings;
  font-size: $font-size-large;
  color: var(--heading-color);
}
</style>
