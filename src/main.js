import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/App.css';

// Create the Vue app instance
const app = createApp(App);

// Use the Vuex store and Vue Router
app.use(store);
app.use(router);

store.dispatch('initializeTheme').then(() => {
  app.mount('#app');
});
