
export default [
  {
    path: '/',
    component: () => import('./components/Home.vue'),
    name: 'home',
  },
  {
    path: '/about',
    component: () => import('./components/About.vue'),
    name: 'about',
  },
]