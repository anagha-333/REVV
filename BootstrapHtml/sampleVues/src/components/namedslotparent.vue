<template>
  <namedslotchild>
    <template #header>
      <h1>Header Content</h1>
    </template>

    <p>This is the default slot content.</p>

    <template #footer>
      <p>Footer Content</p>
    </template>
  </namedslotchild>
</template>

<script setup lang="ts">
import namedslotchild from './namedslotchild.vue'
</script>
