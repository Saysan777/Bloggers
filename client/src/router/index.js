import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import AddPost from '../views/AddPost.vue'
import About from '../views/AboutView.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/post/:id',      //for taking a particular item an displaying in different page
    name: 'post',
    component: Post
  },
  {
    path: '/edit-post/:id',
    name:'edit',
    component:EditPost
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
