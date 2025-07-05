<script setup lang="ts">

import{ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const isVisible= ref(true)
const score=ref(0)

const count = ref(0)
function increment() {
  count.value++
}
const name=ref("")
const email=ref("")
const subscribe=ref("")



const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
])
</script>




<template>
  <div>
    <p v-show="isVisible">Is visible if isVisible is true</p>
    <label>Enter Score: </label>
    <input type="number" v-model="score" />

    <p v-if="score >= 90"> Excellent (A Grade)</p>
    <p v-else-if="score >= 60"> Good (B Grade)</p>
    <p v-else> Needs Improvement (F Grade)</p>
  </div>
  <div>
  <ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>

</div>
<button @click="increment">Add</button>

<input v-model="name" placeholder="Enter your name" />
<p>Hello, {{ name }}!</p>
<input v-model="email" placeholder="Email" />
<input type="checkbox" v-model="subscribe" /> Subscribe
<p>Email: {{ email }}</p>
<p>Subscribed: {{ subscribe }}</p>

<HelloWorld msg="hello" />  
</template>





