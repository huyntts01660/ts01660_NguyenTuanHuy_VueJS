<template>
  <div class="container mt-5">

    <!-- Card chính -->
    <div class="card shadow text-center">
      <div class="card-body">

        <h1 class="card-title mb-3 text-primary">
          🎉 Chào mừng đến với MyBlog
        </h1>

        <p class="card-text text-muted mb-4">
          Nơi chia sẻ những câu chuyện thú vị
        </p>

        <!-- Navigation Buttons -->
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <router-link to="/blogs" class="btn btn-outline-primary">
            📚 Danh sách Blog
          </router-link>

          <router-link to="/profile" class="btn btn-outline-success">
            👤 Thông tin người dùng
          </router-link>

          <router-link to="/dashboard" class="btn btn-outline-dark">
            📊 Dashboard
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>