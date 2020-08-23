import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/expense-lists/:expenseListId', component: () => import('@/views/ExpenseList.vue') },
  { path: '/settle-list/:expenseListId', component: () => import('@/views/SettleList.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
