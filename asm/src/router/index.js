import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import PostCreate from "../views/PostCreate.vue"
import PostDetail from "../views/PostDetail.vue"
import Profile from "../views/Profile.vue"

const routes = [
  { path: "/", component: Home },

  { path: "/login", component: Login },
  { path: "/register", component: Register },

  {
    path: "/post/create",
    component: PostCreate,
    meta: { requiresAuth: true }
  },

  {
    path: "/profile",
    component: Profile,
    meta: { requiresAuth: true }
  },

  { path: "/post/:id", component: PostDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"))

  if (to.meta.requiresAuth && !user) {
    next("/login")
  } else if ((to.path === "/login" || to.path === "/register") && user) {
    next("/") // đã login thì không vào login/register nữa
  } else {
    next()
  }
})

export default router
