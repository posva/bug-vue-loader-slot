import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import './index.css'

let router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Home }],
})

let app = createApp(App)
app.use(router)

app.mount('#app')
