<template>
  <div class="container mt-5">

    <div class="card shadow">
      <div class="card-body">

        <h2 class="card-title text-primary mb-3">
          {{ post.title }}
        </h2>

        <p class="text-muted mb-4">
          ✍️ Tác giả: <strong>{{ post.author }}</strong>
        </p>

        <hr>

        <p class="card-text fs-5">
          {{ post.content }}
        </p>

        <div class="mt-4">
          <router-link to="/blogs" class="btn btn-outline-secondary">
            ⬅ Quay lại danh sách
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      post: {}
    }
  },
  created() {
    const id = this.$route.params.id;

    // Giả lập dữ liệu blog
    const blogs = {
      1: { 
        title: 'Giới thiệu về Vue Router', 
        content: 'Vue Router giúp xây dựng ứng dụng Single Page Application (SPA) bằng cách điều hướng giữa các trang mà không cần tải lại trang.', 
        author: 'Huy' 
      },
      2: { 
        title: 'Hướng dẫn tạo Form với v-model', 
        content: 'v-model là kỹ thuật binding hai chiều trong Vue, giúp đồng bộ dữ liệu giữa input và biến trong JavaScript.', 
        author: 'Huy' 
      },
      3: { 
        title: 'Xử lý điều hướng và tham số URL', 
        content: 'Trong Vue Router, ta có thể lấy tham số từ URL thông qua this.$route.params để hiển thị nội dung động.', 
        author: 'Huy' 
      }
    };

    this.post = blogs[id] || { 
      title: 'Không tìm thấy', 
      content: 'Bài viết không tồn tại', 
      author: '' 
    };
  }
}
</script>