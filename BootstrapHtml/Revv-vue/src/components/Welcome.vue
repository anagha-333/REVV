<template>
    <Header />
  <div class="welcome-container">
    <div class="text-center">
      <h1>Welcome, {{ email }}!</h1>
      <p class="lead">You have successfully logged in.</p>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from './Header.vue'
import Footer from './Footer.vue'

const route = useRoute()
const email = (route.query.email as string) || 'Guest'
</script>

<style scoped>
.welcome-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
}

h1 {
  color: #000080;
}
</style>
