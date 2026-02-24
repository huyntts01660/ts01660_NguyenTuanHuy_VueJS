<template>
  <div class="container mt-5">

    <div class="card shadow">
      <div class="card-body">

        <h2 class="text-primary mb-4">
          👤 Thông tin người dùng
        </h2>

        <!-- Navigation Tabs -->
        <ul class="nav nav-tabs mb-4">
          <li class="nav-item">
            <router-link 
              to="/profile/info" 
              class="nav-link"
            >
              Thông tin cơ bản
            </router-link>
          </li>

          <li class="nav-item">
            <router-link 
              to="/profile/settings" 
              class="nav-link"
            >
              Cài đặt
            </router-link>
          </li>
        </ul>

        <!-- Nội dung con -->
        <router-view></router-view>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserProfile'
}
</script>