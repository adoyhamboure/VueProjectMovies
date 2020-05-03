import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieInfoView from '../views/MovieInfoView.vue'
import MovieEditView from '../views/MovieEditView.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieInfo',
    component: MovieInfoView
  },
  {
    path: '/movie/:id/edit',
    name: 'MovieEdit',
    component: MovieEditView
  }
]

const router = new VueRouter({
  routes
})

export default router
