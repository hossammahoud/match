import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _654ec239 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _37a533c6 = () => interopDefault(import('../pages/questions.vue' /* webpackChunkName: "pages/questions" */))
const _068d0003 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _98dbea86 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _c8b1c1bc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _654ec239,
    name: "login"
  }, {
    path: "/questions",
    component: _37a533c6,
    name: "questions"
  }, {
    path: "/register",
    component: _068d0003,
    name: "register"
  }, {
    path: "/team",
    component: _98dbea86,
    name: "team"
  }, {
    path: "/",
    component: _c8b1c1bc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
