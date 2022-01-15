import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import ScrollTop from 'primevue/scrolltop';
import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-blue/theme.css'     //theme
import 'primevue/resources/primevue.min.css'               //core css
import 'primeicons/primeicons.css'                       //icons

const app = createApp(App)
app.use(store)
app.use(router)
app.use(PrimeVue)
app.component('ScrollTop', ScrollTop);
app.component('InputText', InputText);




app.mount('#app')




