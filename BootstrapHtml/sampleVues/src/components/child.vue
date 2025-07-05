<template>
  <div>
    <h3>Child Component</h3>
    <p>Injected Message: {{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue'

const msg = inject<Ref<string>>('anagha')

if (!msg) {
  throw new Error('sharedMessage not provided')
}
</script>
