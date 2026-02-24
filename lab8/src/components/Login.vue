<template>
  <div class="container mt-5">

    <div class="row justify-content-center">
      <div class="col-md-5">

        <div class="card shadow">
          <div class="card-body">

            <h2 class="text-center text-primary mb-4">
              🔐 Đăng nhập
            </h2>

            <form @submit.prevent="login">

              <div class="mb-3">
                <label class="form-label">Username:</label>
                <input 
                  v-model="username" 
                  type="text" 
                  class="form-control" 
                  required 
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Password:</label>
                <input 
                  v-model="password" 
                  type="password" 
                  class="form-control" 
                  required 
                />
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary">
                  Đăng nhập
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      localStorage.setItem('isAuthenticated', 'true');
      this.$router.push({ name: 'Dashboard' });
    }
  }
}
</script>