import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Main from '@/components/Main'
import Sign from '@/components/Sign'
import Login from '@/components/Login'
import NowCharge from '@/components/charge/NowCharge'
import ChangePay from '@/components/pay/ChangePay'
import Usage from '@/components/usage/Usage'


Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/nowcharge',
      name: 'NowCharge',
      component: NowCharge
    },
    {
      path: '/usage',
      name: 'Usage',
      component: Usage
    },
    {
      path: '/changepay',
      name: 'ChangePay',
      component: ChangePay
    },
    
  ]
})
