import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrewView from '../views/CrewView.vue'
import DestinationView from '../views/DestinationView.vue'
import TechView from '../views/TechView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/crew',
      name: 'crew',
      component: CrewView
    },
    {
      path: '/destination',
      name: 'destination',
      component: DestinationView
    },
    {
      path: '/tech',
      name: 'tech',
      component: TechView
    }
  ]
})

export default router
