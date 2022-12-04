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
        path: '/buy/:id',
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
        path: '/successTip',
        name: 'successTip',
        component: () => import('@/views/buySuccessTip/index.vue')
      },
      // 匹配成功提示的错误指向
      {
        path: '/successTip*',
        redirect: '/pay'
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
      },
      // 添加收货地址
      {
        path: '/user/address',
        name: 'address-user',
        component: () => import('@/views/user/address/index.vue')
      },
      {
        path: '/user/test',
        name: 'test',
        component: () => import('@/views/test/index.vue')
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
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/errorPage/404/index.vue')
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
// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }

  return originalPush.call(this, location).catch((err) => err)
}

export default router
