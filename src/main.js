import { createApp } from 'vue'
import Vue3TouchEvents from "vue3-touch-events";
import store from './store/store';
import App from './App.vue'
import router from './router.js'

createApp(App).use(store).use(router).use(Vue3TouchEvents, {
    swipeTolerance: 20
}).mount('#app')
