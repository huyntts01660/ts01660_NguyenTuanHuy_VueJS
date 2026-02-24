<template>
  <div class="container mt-5">

    <div class="card shadow">
      <div class="card-body">

        <h2 class="text-center text-primary mb-4">
          📚 Danh sách Blog
        </h2>

        <ul class="list-group list-group-flush">
          <li 
            v-for="blog in blogs" 
            :key="blog.id"
            class="list-group-item"
          >
            <router-link 
              :to="`/blog/${blog.id}`"
              class="text-decoration-none"
            >
              {{ blog.title }}
            </router-link>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      blogs: [
        { id: 1, title: 'Giới thiệu về Vue Router' },
        { id: 2, title: 'Hướng dẫn tạo Form với v-model' },
        { id: 3, title: 'Xử lý điều hướng và tham số URL' }
      ]
    }
  }
}
</script>