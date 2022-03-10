import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsersPage from './pages/AllUsersPage.vue';
import Goals from './pages/Goals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AllUsersPage,
    },
    {
      path: '/goals',
      component: Goals,
    },
  ],
});

const app = createApp(App);
app.component('base-modal', BaseModal);
app.use(router);
router.isReady().then(() => {
  app.mount('#app');
});
