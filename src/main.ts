import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/app.css';
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/bootstrap4-dark-purple/theme.css";
import 'primevue/resources/primevue.min.css';

import Button from 'primevue/button';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Button', Button);

app.mount('#app')
