<template>
  <div class="result">
    <h2>The looser is:</h2>
    <div class="looser-name">{{ looser }}</div>
    <button class="action-btn pink-outline" @click="$emit('reset')">Start over</button>
    <button class="action-btn blue-outline" @click="$emit('pick')">
      Don't like it, get a new name
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ looser: string }>();
defineEmits(['reset', 'pick']);
</script>
