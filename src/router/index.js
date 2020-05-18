import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive:false
    }
  },
  // 订单
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta:{
      keepAlive:false
    }
  },
  // 用户中心
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta:{
      keepAlive:false
    }
  },
  // 详情页
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    meta:{
      keepAlive:true
    }
  },
  // 影院
  {
    path: '/theater',
    name: 'Theater',
    component: () => import('../views/Theater.vue'),
    meta:{
      keepAlive:true
    }
  },
  // 选座
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('../views/Booking.vue'),
    meta:{
      keepAlive:false
    }
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      keepAlive:false
    }
  },
  // 注册
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta:{
      keepAlive:false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
