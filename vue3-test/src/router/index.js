import { createRouter, createWebHistory } from 'vue-router'
import PropsCustom from '../views/PropsCustomValidator.vue'
import lifeCycle from '../views/LifeCycle.vue'
import vonce from '../views/VOnceView.vue'
import Computed from '../views/ComputedView.vue'
import GetterSetter from '../views/GetterSetter.vue'


const routes = [
  {
    path: '/propsCustom',
    name: 'propsCustom',
    component: PropsCustom
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: lifeCycle
  },
  {
    path: '/vonce',
    name: 'vonce',
    component: vonce
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/getterSetter',
    name: 'GetterSetter',
    component: GetterSetter
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
