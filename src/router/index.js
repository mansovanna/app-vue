import { createRouter, createWebHistory } from 'vue-router'
import ScreenView from '../Layouts/ScreenView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path:'/login',
    name:'login',
    component: ()=>import('../Security/LoginView.vue'),
  },
  {
    path:'/signup',
    name:'signup',
    component: ()=>import('../Security/SignupView.vue'),
  },
  {
    path: '/',
    name: 'screen',
    component: ScreenView,
    children: [
      {
        path:'/',
        name:'home',
        component: HomeView,
      },
      {
        path:'/about',
        name:'about',
        component: AboutView,
      },
      {
        path:'/setting',
        name:'setting',
        component: ()=>import('../views/SettingView.vue'),
      },
      {
        path:'/video',
        name:'video',
        component: ()=>import('../views/VideoView.vue'),
      }
    ]
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
