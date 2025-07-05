<template>
  <div class="container">
    <div v-if="!showResult">
      <h1>Who pays the bill</h1>
      <div class="input-group">
        <input
          v-model="newName"
          @keyup.enter="addName"
          placeholder="Enter a name"
        />
        <button class="btn" @click="addName">Add</button>
      </div>
      <div class="error" v-if="error">{{ error }}</div>

      <NameList :names="names" @pick="pickLooser" v-if="names.length >= 1" />
    </div>

    <ResultDisplay
      v-if="showResult"
      :looser="looser"
      @reset="reset"
      @pick="pickLooser"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NameList from './NameList.vue';
import ResultDisplay from './ResultDisplay.vue';

const newName = ref('');
const names = ref<string[]>([]);
const looser = ref('');
const error = ref('');
const showResult = ref(false);

function addName() {
  const name = newName.value.trim();
  if (!name) {
    error.value = 'Sorry, no empty name';
    return;
  }
  names.value.push(name);
  newName.value = '';
  error.value = '';
}

function pickLooser() {
  const index = Math.floor(Math.random() * names.value.length);
  looser.value = names.value[index];
  showResult.value = true;
}

function reset() {
  names.value = [];
  looser.value = '';
  newName.value = '';
  showResult.value = false;
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* center vertically */
  text-align: center;
  font-family: 'Comic Sans MS', cursive;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto; /* center horizontally */
  min-height: 100vh;
}

.input-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 250px;
}

h1 {
  color: rgb(29, 70, 5);
  text-decoration: underline;
  font-size: 32px;
}

.btn {
  padding: 10px 15px;
  background-color: #31c0f3;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.name-list {
  margin-top: 20px;
}

.name-badge {
  display: inline-block;
  background-color: #31c0f3;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  margin: 5px;
  font-size: 14px;
}

.error {
  color: red;
  margin-top: 10px;
}

.action-area {
  margin-top: 20px;
}

.result h2 {
  color: rgb(7, 90, 12);
  text-decoration: underline;
  font-size: 24px;
}

.looser-name {
  font-size: 40px;
  color: #31c0f3;
  font-weight: bold;
  margin: 20px 0;
}

.action-btn {
  margin: 10px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 8px;
}

.pink-outline {
  color: rgb(6, 80, 43);
  border: 2px solid rgb(6, 66, 36);
  background-color: transparent;
}

.blue-outline {
  color: #31c0f3;
  border: 2px solid #31c0f3;
  background-color: transparent;
}
</style>
