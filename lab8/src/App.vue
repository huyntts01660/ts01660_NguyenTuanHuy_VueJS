<template>
  <div id="app">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div class="container">

        <router-link class="navbar-brand fw-bold" to="/">
          🌐 MyBlog
        </router-link>

        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <router-link class="nav-link" to="/">
                Home
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/blogs">
                Blogs
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/profile">
                Profile
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">
                Dashboard
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                Login
              </router-link>
            </li>

          </ul>
        </div>

      </div>
    </nav>

    <!-- Nội dung -->
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>