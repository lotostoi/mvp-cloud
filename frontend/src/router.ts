import { createRouter, createWebHistory } from 'vue-router';
import Main from './pages/Advertiser/Main';
import Home from './pages/Home';

const routes = [
  { path: '/', component: Home },
  { path: '/main', component: Main }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
