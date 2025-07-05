<template>
  <div>
    <div class="name-list">
      <span v-for="name in names" :key="name" class="name-badge">{{ name }}</span>
    </div>
    <div class="action-area" v-if="names.length >= 2">
      <button class="action-btn pink-outline" @click="$emit('pick')">
        Check the looser
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ names: string[] }>();
defineEmits(['pick']);
</script>


