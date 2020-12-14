import viteSSR from 'vite-ssr';
import App from './App.vue';
import routes from './routers';
import store from './store';
import './index.less';

export default viteSSR(App, { routes }, ({ app, router }): any => {
  // 集成vuex
  app.use(store);

  router.isReady().then(() => {
    const to = router.currentRoute;
    const matchedRoute = to.value.matched;

    const matchedComponents: any = [];
    matchedRoute.map((route: any) => {
      matchedComponents.push(...Object.values(route.components));
    });

    const asyncDataFuncs = matchedComponents.map((component: any) => {
      const asyncData = component.asyncData || null;
      if (asyncData) {
        return asyncData({
          store,
          router: to,
        });
      }
    });

    Promise.all(asyncDataFuncs).then(() => {
      router.beforeEach(async (to, from, next) => {
        next();
      });
    });
  });
});
