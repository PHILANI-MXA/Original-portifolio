import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue';
import 'bootstrap-icons/font/bootstrap-icons';
import bootstrap from 'bootstrap'
createApp(App).use(BootstrapVue).use(IconsPlugin).use(store).use(router).mount('#app');