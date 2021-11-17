import { createApp } from 'vue'
import store from './store/store';
import App from './App.vue'
import Vue3TouchEvents from "vue3-touch-events";

createApp(App).use(store).use(Vue3TouchEvents, {
    swipeTolerance: 20
}).mount('#app')
