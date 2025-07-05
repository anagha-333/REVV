<template>
  <scopedslotchild v-slot="{ user }">
    <p>{{ user.name }}</p>
  </scopedslotchild>
</template>

<script setup lang="ts">
import scopedslotchild from './scopedslotchild.vue'
</script>
