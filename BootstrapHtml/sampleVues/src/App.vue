<template>
  <div>
    <slotparent />
    <namedslotparent />
  </div>
   <div>
    <h2>Using Scoped Slots</h2>
    <scopedslotparent />
  </div>
  <!-- <form @submit.prevent="submitForm">
    <input v-model="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form> -->
  <form @submit.prevent="onSubmit">
    <input v-model="nameValue" placeholder="Name" />
    <span>{{ errors.name }}</span>
    <input v-model="emailValue" placeholder="Email" />
    <span>{{ errors.email }}</span>
    <button type="submit">Submit</button>
  </form>

   <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import slotparent from './components/slotparent.vue'
import namedslotparent from './components/namedslotparent.vue'
import scopedslotparent from './components/scopedslotparent.vue'

const msg = ref("hello")
provide("anagha", msg)

// const email = ref('')
// function submitForm() {
//   alert(`Submitted: ${email.value}`)
// }
import { useField, useForm } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

const { handleSubmit, errors } = useForm()
const { value: emailValue } = useField('email', email)
const { value: nameValue } = useField('name', required)

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values))
})
</script>
