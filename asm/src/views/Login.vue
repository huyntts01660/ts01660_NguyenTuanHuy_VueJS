<template>
  <div class="container mt-5">
    <h2 class="text-center fw-bold">Đăng nhập</h2>

    <form class="w-50 mx-auto" @submit.prevent="handleLogin">
      <input v-model="email" class="form-control mb-3" placeholder="Email" />
      <input v-model="password" type="password" class="form-control mb-3" placeholder="Mật khẩu" />
      <button class="btn btn-success w-100">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from "vue"
import { useRouter } from "vue-router"
import { login } from "@/services/auth.service"

const email = ref("")
const password = ref("")
const router = useRouter()

// 🔥 inject reactive state
const currentUser = inject("currentUser")

const handleLogin = async () => {
  const user = await login(email.value, password.value)

  if (user.length > 0) {
    currentUser.value = user[0]              // ✅ OK
    localStorage.setItem("user", JSON.stringify(user[0]))
    router.push("/")
  } else {
    alert("Sai email hoặc mật khẩu")
  }
}
</script>
