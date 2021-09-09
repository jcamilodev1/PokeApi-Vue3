import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
createApp(App).use(store).use(router).mount('#app')
