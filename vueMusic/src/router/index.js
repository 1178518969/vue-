import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Bangdan from '@/pages/Bangdan/Bangdan'
import My from '@/pages/My/My'
import Search from '@/pages/Search/Search'
import Player from "@/pages/Player/Player"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bangdan',
      name: 'Bangdan',
      component: Bangdan
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/player/:songId',
      name: 'Player',
      component: Player
    }
  ]
})
