import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Base from '@/components/CardList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/AboutView.vue')
  },
  {
    path: '/base',
    name: 'base',
    component: Base
  },
  // カードリスト
  {
    path: '/CardList',
    name: 'CardList',
    // ↓このインポートの方法だと、スマートでよい。インポートエリアをいちいち見に行かなくてよい。
    component: () =>
      import(/* webpackChunkName: 'CardList' */ '../components/CardList.vue')
  },
  // ゲームプレイ画面
  {
    path: '/PlayGame',
    name: 'PlayGame',
    component: () =>
      import(/* webpackChunkName: 'PlayGame' */ '../components/PlayGame.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
