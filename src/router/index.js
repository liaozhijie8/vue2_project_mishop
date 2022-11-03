import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'
import LayoutUser from '@/views/user/layout/index.vue'
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
  /* 个人中心 */
  {
    path: '/user',
    name: 'user',
    component: LayoutUser,
    redirect: '/user/portal',
    children: [
      {
        path: '/user/portal',
        name: 'portal',
        component: () => import('@/views/user/portal/index.vue')
      },
      // 订单
      {
        path: '/user/order',
        name: 'order',
        component: () => import('@/views/user/order/index.vue')
      },
      // 订单评价
      {
        path: '/user/order/comment',
        name: 'comment-order',
        component: () => import('@/views/user/comment/index.vue')
      }
    ]
  },
  // 购物车清单页面
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/pay/index.vue')
  },
  // 结账页面
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/checkout/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savePosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
