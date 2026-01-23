<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Chạy bộ mỗi sáng giúp cải thiện sức khỏe',
    content: 'Chạy bộ vào buổi sáng giúp cơ thể dẻo dai hơn, tinh thần sảng khoái và tăng năng lượng cho cả ngày làm việc.'
  },
  {
    id: 2,
    title: '5 bài tập thể dục đơn giản tại nhà',
    content: 'Không cần đến phòng gym, bạn vẫn có thể tập luyện hiệu quả với các bài tập đơn giản như squat, plank và chống đẩy.'
  },
  {
    id: 3,
    title: 'Cách nấu bữa sáng nhanh gọn cho người bận rộn',
    content: 'Bữa sáng với trứng, bánh mì và sữa giúp cung cấp đủ năng lượng mà vẫn tiết kiệm thời gian chuẩn bị.'
  },
  {
    id: 4,
    title: 'Uống đủ nước mỗi ngày quan trọng thế nào?',
    content: 'Uống đủ nước giúp cơ thể trao đổi chất tốt hơn, làn da khỏe mạnh và hạn chế tình trạng mệt mỏi.'
  }
])

const form = ref({
  id: null,
  title: '',
  content: ''
})

/* chọn bài viết để chỉnh sửa */
const selectPost = (post) => {
  form.value = { ...post }
}

/* đăng bài mới */
const createPost = () => {
  if (!form.value.title) return

  posts.value.push({
    id: Date.now(),
    title: form.value.title,
    content: form.value.content
  })

  resetForm()
}

/* chỉnh sửa bài */
const updatePost = () => {
  const index = posts.value.findIndex(p => p.id === form.value.id)
  if (index !== -1) {
    posts.value[index] = { ...form.value }
    resetForm()
  }
}

/* xóa bài */
const deletePost = (id) => {
  posts.value = posts.value.filter(p => p.id !== id)
}

/* reset form */
const resetForm = () => {
  form.value = { id: null, title: '', content: '' }
}
</script>

<template>
  <div class="row g-4">
    <!-- BÊN TRÁI: FORM -->
    <div class="col-md-8">
      <h4 class="mb-3">✍️ Đăng / Chỉnh sửa bài viết</h4>

      <div class="card p-3">
        <div class="mb-2">
          <label class="form-label">Tiêu đề</label>
          <input
            v-model="form.title"
            class="form-control"
            placeholder="Nhập tiêu đề"
          />
        </div>

        <div class="mb-2">
          <label class="form-label">Nội dung</label>
          <textarea
            v-model="form.content"
            class="form-control"
            rows="5"
            placeholder="Nhập nội dung"
          ></textarea>
        </div>

        <div class="d-flex gap-2 mt-2">
          <button
            class="btn btn-primary"
            @click="createPost"
          >
            Đăng bài
          </button>

          <button
            class="btn btn-warning"
            :disabled="!form.id"
            @click="updatePost"
          >
            Chỉnh sửa
          </button>
        </div>
      </div>
    </div>

    <!-- BÊN PHẢI: DANH SÁCH BÀI -->
    <div class="col-md-4">
      <h5 class="mb-3">📚 Bài viết của bạn</h5>

      <ul class="list-group">
        <li
          v-for="post in posts"
          :key="post.id"
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div>
            <strong>{{ post.title }}</strong>
          </div>

          <div class="btn-group btn-group-sm">
            <button
              class="btn btn-outline-primary"
              @click="selectPost(post)"
            >
              Sửa
            </button>
            <button
              class="btn btn-outline-danger"
              @click="deletePost(post.id)"
            >
              Xóa
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
