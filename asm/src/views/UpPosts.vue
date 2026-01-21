<template>
  <div>
    <div class="card">
      <div class="card-header fw-bold">
        Đăng bài viết
      </div>

      <div class="card-body">
        <!-- Tiêu đề -->
        <div class="mb-3">
          <label class="form-label">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            v-model="post.title"
            placeholder="Nhập tiêu đề bài viết"
          />
        </div>

        <!-- Nội dung -->
        <div class="mb-3">
          <label class="form-label">Nội dung</label>
          <textarea
            class="form-control"
            rows="5"
            v-model="post.content"
            placeholder="Nhập nội dung bài viết"
          ></textarea>
        </div>

        <!-- Hình ảnh -->
        <div class="mb-3">
          <label class="form-label">Hình ảnh minh họa</label>
          <input
            type="file"
            class="form-control"
            @change="handleImage"
          />
        </div>

        <!-- Preview -->
        <div v-if="previewImage" class="mb-3">
          <img
            :src="previewImage"
            class="img-fluid rounded"
            style="max-height: 250px"
          />
        </div>

        <button class="btn btn-primary" @click="submitPost">
          Đăng bài
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpPosts',
  data() {
    return {
      post: {
        title: '',
        content: '',
        image: null
      },
      previewImage: null
    }
  },
  methods: {
    handleImage(event) {
      const file = event.target.files[0]
      if (file) {
        this.post.image = file
        this.previewImage = URL.createObjectURL(file)
      }
    },
    submitPost() {
      console.log('Bài viết:', this.post)
      alert('Đăng bài thành công (demo)')
    }
  }
}
</script>
