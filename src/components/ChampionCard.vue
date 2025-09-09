<template>
  <div class="champion-card">
    🥇 Чемпион по огурцам: {{ champion.name }} - {{ champion.cucumbersCount }} шт.
  </div>
</template>

<script setup>
defineProps({
  champion: {
    type: Object,
    required: true,
  },
});
</script>
