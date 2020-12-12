import viteSSR from 'vite-ssr'
import App from './App.vue'
import routes from './routes'
import store from './store'
import './index.css'

export default viteSSR(
  App,
  { routes },
  ({ app, router, isClient, request, initialState }) => {

    app.use(store);

    // The 'request' is the original server request (undefined in browser).
    // The 'initialState' is only available in the browser and can be used to
    // pass it to Vuex, for example, if you prefer to rely on stores rather than Page props.
    router.beforeEach(async (to, from, next) => {
      next()
    })
  }
)