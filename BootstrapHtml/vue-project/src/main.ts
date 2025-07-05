import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld  from './components/HelloWorld.vue'

App.component('HelloWorld', HelloWorld)
createApp(App).mount('#app')
