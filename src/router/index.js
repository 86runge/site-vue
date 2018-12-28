import App from '../App'
import Home from '../page/home/home'
import Login from '../page/login/login'
import Good from '../page/good/good'
import GoodList from '../page/good/children/good-list'
import GoodManage from '../page/good/children/good-manage'
import Order from '../page/order/order'
import OrderList from '../page/order/children/order-list'
import OrderManage from '../page/order/children/order-manage'
import Aname from '../page/test-page/aname'
import Bname from '../page/test-page/bname'
import store from '../store'
import VueRouter from 'vue-router'

const routes = [{
  path: '/',
  component: App,
  children: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/good',
      component: Good,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          redirect: 'good-list'
        },
        {
          path: 'good-list',
          component: GoodList
        },
        {
          path: 'good-manage',
          props: true,
          component: GoodManage
        }
      ]
    },
    {
      path: '/order',
      component: Order,
      children: [
        {
          path: '',
          redirect: 'order-list'
        },
        {
          path: 'order-list',
          component: OrderList
        },
        {
          path: 'order-manage',
          props: true,
          component: OrderManage
        }
      ]
    },
    {
      path: '/aname',
      component: Aname
    },
    {
      path: '/bname',
      component: Bname
    },
    {
      path: '**',
      redirect: '/home'
    }
  ]
}]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('login', window.localStorage.getItem('token'))
}

const router = new VueRouter({
  routes,
  mode: 'history',
  // linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (store.state.token) {
      // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
