import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Posts from '@/views/Posts.vue'
import PostDetail from '@/views/PostDetail.vue'
import UpPosts from '@/views/UpPosts.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'

const routes = [
  { path: '/', redirect: '/home' },

  { path: '/home', component: Home },
  { path: '/posts', component: Posts },

  // 👉 CHI TIẾT BÀI VIẾT
  {
    path: '/posts/:id',
    component: PostDetail,
    props: true
  },

  { path: '/upposts', component: UpPosts },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
