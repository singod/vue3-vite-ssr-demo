import viteSSR from 'vite-ssr'
import App from './App.vue'
import routes from './routes'
import './index.css'

routes.forEach((route) => {
  route.props = (r) => ({ ...(r.meta.state || {}), ...(r.props || {}) })
})

export default viteSSR(
  App,
  { routes },
  ({ app, router, isClient, request, initialState }) => {
    // The 'request' is the original server request (undefined in browser).
    // The 'initialState' is only available in the browser and can be used to
    // pass it to Vuex, for example, if you prefer to rely on stores rather than Page props.
    console.log('viteSSR: ================');
    console.log(isClient);
    router.beforeEach(async (to, from, next) => {
      next()
    })
  }
)