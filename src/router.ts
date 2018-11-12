import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/tone-analyzer',
      name: 'tone-analyzer',
      component: () => import('./views/ToneAnalyzer.vue')
    }
  ]
})
