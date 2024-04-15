import './assets/main.css'


import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from './App.vue'

import Home from "./components/Home.vue";

const cookies = useCookies();

const routes = [
    {path: "/", component: Home},
];



const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).use(VueQueryPlugin).mount('#app');
