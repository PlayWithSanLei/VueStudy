import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/home'
// import About from "../components/About";
// import User from "../components/User"

Vue.use(VueRouter)
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
const Login = () => import('../components/login')

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
