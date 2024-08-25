import { createRouter, createWebHistory } from 'vue-router'
import ScreenView from '../Layouts/ScreenView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/Shop/ProductView.vue'
import CategoryView from '@/views/Shop/CategoryView.vue'
import ControllerView from '@/views/ControllerView.vue'
import DashboardView from '@/views/controller/DashboardView.vue'
import DeviceView from '@/views/controller/DeviceView.vue'
import DocumentView from '@/views/controller/DocumentView.vue'
import ConfigView from '@/views/controller/ConfigView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../Security/LoginView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../Security/SignupView.vue'),
  },
  {
    path: '/',
    name: 'screen',
    component: ScreenView,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
      {
        path: 'shop',
        name: 'shop',
        component: ShopView,
        children: [
          {
            path: '',
            name: 'product',
            component: ProductView,
          },
          {
            path: 'category',
            name: 'category',
            component: CategoryView,
          },
        ],
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/SettingView.vue'),
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('../views/VideoView.vue'),
      },
      {
        path:'controller',
        name:'controller',
        component: ControllerView,
        children: [
          {
            path:'',
            name:'dashboard',
            component: DashboardView,
          },
          {
            path:'device',
            name:'device',
            component: DeviceView,
          },
          {
            path:'document',
            name:'document',
            component: DocumentView,
          },
          {
            path:'config',
            name:'config',
            component: ConfigView,
          },
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
