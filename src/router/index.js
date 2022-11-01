import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/shop',
    children: [
      {
        path: '/shop',
        name: 'shop',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/buy',
        name: 'buy',
        component: () => import('@/views/buy/index.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/productDetail/index.vue')
      },
      {
        path: '/comment',
        name: 'comment',
        component: () => import('@/views/comments/index.vue')
      },
      {
        path: '/buy/successTip',
        name: 'successTip',
        component: () => import('@/views/butSuccessTip/index.vue')
      }
    ]
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/pay/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
