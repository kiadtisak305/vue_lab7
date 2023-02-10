import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import PlansView from '../views/PlansView.vue'
import AddDropView from '../views/AddDropView.vue'
import Comsci from '../components/Com-sci.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/news',
      name: 'news',
      component: NewsView
    }, 
    {
      path: '/plans',
      name: 'plans',
      component: PlansView
    },
    {
      path: '/adddrop',
      name: 'adddrop',
      component: AddDropView
    },
    {
      path: '/com-sci',
      name: 'com-sci',
      component: Comsci
    }
  ]
})

export default router
