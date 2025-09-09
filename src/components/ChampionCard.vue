<script setup lang="ts">
import { User } from '@/composables/useUsers';
defineProps<{
  champion: User | null;
}>();
</script>

<template>
  <div class="champion-card">
    🥇 Чемпион по огурцам: {{ champion?.name }} - {{ champion?.cucumbersCount }} шт.
  </div>
</template>
