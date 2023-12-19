import { createRouter, createWebHistory } from 'vue-router'
import PropsCustom from '../views/PropsCustomValidator.vue'
import lifeCycle from '../views/LifeCycle.vue'
import vonce from '../views/VOnceView.vue'
import Computed from '../views/ComputedView.vue'
import GetterSetter from '../views/GetterSetter.vue'
import VOnEvent from '../views/VOnEvent.vue'
import PropsView from '../views/PropsView.vue'
import EmitEvent from '../views/EmitEvent.vue'
import SlotView from '../views/SlotView.vue'
import ProvideInject from '../views/ProvideInject.vue'
import RefsView from '../views/RefsView.vue'


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
  {
    path: '/vOnEvent',
    name: 'vOnEvent',
    component: VOnEvent
  },
  {
    path: '/PropsView',
    name: 'PropsView',
    component: PropsView
  },
  {
    path: '/EmitEvent',
    name: 'EmitEvent',
    component: EmitEvent
  },
  {
    path: '/SlotView',
    name: 'SlotView',
    component: SlotView
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/RefsView',
    name: 'RefsView',
    component: RefsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
