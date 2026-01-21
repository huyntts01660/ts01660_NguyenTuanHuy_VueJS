<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-info">
    <div class="container">
      <!-- Logo -->
      <router-link class="navbar-brand" to="/home">
        <img src="/images/logo-energy-pilates.png" alt="" style="width:150px">
      </router-link>

      <!-- Toggle mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <!-- Left menu -->
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/posts">
              <i class="fa-solid fa-list"></i> Bài viết
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/upposts">
              <i class="fa-solid fa-list"></i> Đăng bài viết
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="fa-solid fa-circle-info"></i> Thông tin
            </router-link>
          </li>

          <!-- Tài khoản -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i class="fa-solid fa-user"></i> Tài khoản
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/login">Đăng nhập</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/register">Đăng ký</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/forgot-password">Quên mật khẩu</router-link>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Right menu -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="changeLang('vi')">
              Tiếng Việt
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="changeLang('en')">
              Tiếng Anh
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    changeLang(lang) {
      console.log("Đổi ngôn ngữ:", lang)
      // sau này tích hợp i18n
    }
  }
}
</script>
