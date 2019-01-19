import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gyik',
      name: 'faq',
      component: () => import('./views/FAQ.vue')
    },
    {
      path: '/impresszum',
      name: 'impressum',
      component: () => import('./views/Impressum.vue')
    },
    {
      path: '/kapcsolat',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/ivas-ok/:id',
      name: 'cause',
      component: () => import('./views/Cause.vue')
    }
  ]
})
