import Vue from 'vue'
import App from './App'
//import router from './router'
//引入
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VCharts from 'v-charts'
Vue.use(VCharts)


import Login from './pages/Login.vue'

import AccountAdd from './pages/AccountAdd.vue'
import AccountShow from './pages/AccountShow.vue'

import BalanceAdd from './pages/BalanceAdd.vue'
import BalanceForm from './pages/BalanceForm.vue'
import BalanceShow from './pages/BalanceShow.vue'

import BorrowLendAdd from './pages/BorrowLendAdd.vue'
import BorrowLendForm from './pages/BorrowLendForm.vue'
import BorrowLendShow from './pages/BorrowLendShow.vue'

import FinanceAdd from './pages/FinanceAdd.vue'
import FinanceChart from './pages/FinanceChart.vue'
import FinanceShow from './pages/FinanceShow.vue'

import MemberAdd from './pages/MemberAdd.vue'
import MemberShow from './pages/MemberShow.vue'

import UpdatePwd from './pages/UpdatePwd.vue'
import Home from './pages/Home.vue'
import UpdateName from './pages/UpdateName.vue'

const routes = [
  { path: '/home', component: Home,
    children:[
        { path: '/accountadd', component: AccountAdd },
        { path: '/accountshow', component: AccountShow },
        { path: '/balanceadd', component: BalanceAdd },
        { path: '/balanceform', component: BalanceForm },
        { path: '/balanceshow', component: BalanceShow },
        { path: '/borrowlendadd', component: BorrowLendAdd },
        { path: '/borrowlendform', component: BorrowLendForm },
        { path: '/borrowlendshow', component: BorrowLendShow },
        { path: '/financeadd', component: FinanceAdd },
        { path: '/financechart', component: FinanceChart },
        { path: '/financeshow', component: FinanceShow },
        { path: '/login', component: Login },
        { path: '/memberadd', component: MemberAdd },
        { path: '/membershow', component: MemberShow },
        { path: '/updatepwd', component: UpdatePwd },
        { path: '/updatename', component: UpdateName },
    ]
   },
  { path: '/addaccount', component: AccountAdd },
  { path: '/accountshow', component: AccountShow },
  { path: '/balanceadd', component: BalanceAdd },
  { path: '/logbalanceformin', component: BalanceForm },
  { path: '/balanceshow', component: BalanceShow },
  { path: '/borrowlendadd', component: BorrowLendAdd },
  { path: '/borrowlendform', component: BorrowLendForm },
  { path: '/borrowlendshow', component: BorrowLendShow },
  { path: '/financeadd', component: FinanceAdd },
  { path: '/financechart', component: FinanceChart },
  { path: '/financeshow', component: FinanceShow },
  { path: '/login', component: Login },
  { path: '/memberadd', component: MemberAdd },
  { path: '/membershow', component: MemberShow },
  { path: '/updatepwd', component: UpdatePwd },
  { path : '*' , redirect : '/home'}//默认跳转路由
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})




new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
