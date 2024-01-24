import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
// import vertex from './shader/flyLine/vertex.glsl'
// console.log(vertex, 'vertex')
const app = createApp(App)

app.use(router)

app.mount('#app')
