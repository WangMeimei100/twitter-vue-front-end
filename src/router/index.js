import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import NotFound from '../views/NotFound.vue'
import '@/assets/css/basic.css'
import '@/assets/css/color.css'
import '@/assets/css/reset.css'
import '@/assets/css/typography.css'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/follows',
    name: 'user-follows',
    component: () => import('../views/UserFollows.vue')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminMain.vue'),
    children: [
      {
        path: '/admin/tweets',
        name: 'admin-tweets',
        component: () => import('../components/AdminTweetList.vue'),
      },
      {
        path: '/admin/users',
        name: 'admin-users',
        component: () => import('../components/AdminUserList.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin-login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
