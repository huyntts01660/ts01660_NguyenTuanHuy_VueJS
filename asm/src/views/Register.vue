<template>
  <div class="container mt-5">
    <h2 class="text-center">Đăng ký</h2>

    <form class="w-50 mx-auto" @submit.prevent="handleRegister">
      <input v-model="name" class="form-control mb-3" placeholder="Tên" />
      <input v-model="email" class="form-control mb-3" placeholder="Email" />
      <input v-model="password" type="password" class="form-control mb-3" placeholder="Mật khẩu" />
      <button class="btn btn-primary w-100">Đăng ký</button>
    </form>
  </div>
</template>

<script>
import { register } from "@/services/auth.service"

export default {
  data() {
    return { name: "", email: "", password: "" }
  },
  methods: {
    async handleRegister() {
      await register({
        name: this.name,
        email: this.email,
        password: this.password
      })
      alert("Đăng ký thành công")
      this.$router.push("/login")
    }
  }
}
</script>
