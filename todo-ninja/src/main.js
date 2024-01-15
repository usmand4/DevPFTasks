import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const vuetify = new Vuetify();

const app = createApp(App);
app.use(router);
app.use(vuetify);

app.mount('#app');
