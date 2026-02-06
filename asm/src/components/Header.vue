<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">MyBlog</router-link>

      <!-- MENU CHÍNH -->
      <ul class="navbar-nav me-auto" v-if="isLogin">
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Tài khoản</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/post/create">Đăng bài</router-link>
        </li>
      </ul>

      <!-- MENU PHẢI -->
      <ul class="navbar-nav ms-auto">
        <template v-if="!isLogin">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Đăng nhập</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Đăng ký</router-link>
          </li>
        </template>

        <template v-else>
          <li class="nav-item">
            <span class="nav-link">
              Xin chào, <strong>{{ currentUser.name }}</strong>
            </span>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-light btn-sm ms-2" @click="logout">
              Logout
            </button>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { inject, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const currentUser = inject("currentUser")

const isLogin = computed(() => currentUser.value !== null)

const logout = () => {
  localStorage.removeItem("user")
  currentUser.value = null
  router.push("/login")
}
</script>
