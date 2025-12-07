import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import aosInit from "./plugins/aos";

const app = createApp(App);
const pinia = createPinia()
aosInit();
app.use(pinia) 
app.use(router);
app.mount('#app');
