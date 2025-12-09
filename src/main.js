import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import aosInit from "@@/plugins/aos";
import { useAuthStore } from '@/stores/auth'

// Library

if (import.meta.env.DEV) {
  // В dev: только CSS, всё быстро
  import("bootstrap/dist/css/bootstrap.min.css");
} else {
  // В build: SCSS → красиво, кастомно
  import("@@/assets/styles/bootstrap.scss");
}

// JS bootstrap загружаем всегда
// import "bootstrap";

const app = createApp(App);
const pinia = createPinia();
aosInit();
app.use(pinia);
const auth = useAuthStore() 
app.use(router);
app.mount('#app');
