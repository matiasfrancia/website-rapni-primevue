<script setup lang="ts">
import { ref } from "vue";

const checked = ref(true);
</script>

<template>
  <div class="container">
    <h1>Welcome to the project</h1>
    <Button label="Hazme click!" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  gap: 1rem;
}
</style>
