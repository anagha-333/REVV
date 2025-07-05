<template>
  <div>
    <template v-for="user in users" :key="user.id">
      <slot :user="user" />
    </template>
  </div>
</template>

<script setup lang="ts">
const users = [
  { id: 1, name: 'Anagha' },
  { id: 2, name: 'Rahul' }
]
</script>
