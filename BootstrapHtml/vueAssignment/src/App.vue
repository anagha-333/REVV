<template>
  <div class="app-container">
    <WhoPaysBill />
  </div>
</template>

<script setup lang="ts">
import WhoPaysBill from './components/WhoPaysBill.vue';
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}


.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
