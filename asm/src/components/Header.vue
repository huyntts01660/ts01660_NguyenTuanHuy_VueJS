<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- LOGO -->
      <router-link class="navbar-brand" to="/">MyBlog</router-link>

      <!-- MENU CHÍNH (NGAY SAU MyBlog) -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">
            Tài khoản
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/post/create">
            Đăng bài viết
          </router-link>
        </li>
      </ul>

      <!-- MENU PHẢI -->
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">
            Đăng nhập
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">
            Đăng ký
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
