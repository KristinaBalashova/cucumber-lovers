<script setup>
import { ref, computed } from "vue";

</script>

<template>
  <div class="container">
    
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include flex-column;
  gap: 20px;
  padding: 20px;
  align-items: flex-start;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
}
</style>