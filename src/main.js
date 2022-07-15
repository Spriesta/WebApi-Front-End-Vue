import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import JQuery from 'jquery';
global.JQuery = JQuery;
global.$ = JQuery;
createApp(App).mount('#app')
