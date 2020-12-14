import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../components/404.vue'),
  },
];

export default routes;
