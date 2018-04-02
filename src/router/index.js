import Vue from 'vue'
import Router from 'vue-router'
import Seller from '@/components/seller/seller'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
})
