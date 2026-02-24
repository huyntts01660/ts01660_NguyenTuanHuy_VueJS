<template>
  <div class="container mt-5">

    <div class="card shadow">
      <div class="card-body text-center">

        <h2 class="text-primary mb-3">
          📊 Dashboard
        </h2>

        <p class="text-muted">
          Chào mừng bạn đến với trang quản trị!
        </p>

        <p>
          Đây là trang được bảo vệ, chỉ người dùng đã đăng nhập mới truy cập được.
        </p>

        <div class="mt-4">
          <button @click="logout" class="btn btn-danger">
            🚪 Đăng xuất
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated');
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>