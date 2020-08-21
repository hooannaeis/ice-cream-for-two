import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ExpenseList from '../views/ExpenseList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/expense-lists/:expenseListId', component: ExpenseList }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
