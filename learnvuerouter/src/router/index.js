import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/home'
// import About from "../components/About";
// import User from "../components/User"

Vue.use(VueRouter)
const Home = () => import('../components/Home')
const Login = () => import('../components/login')
const Signup = () => import('../components/signup')
const Welcome = () => import('../components/welcome')
const Users = () => import('../components/user/users')

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数, 表示放行
  if(to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router
