// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'

const routes = [
   {
    path: '/',
    component:Home,
    
  },
  
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/welcome',
    component: Welcome, 
  },
    
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
