<script setup>
import { ref, inject, onMounted } from "vue"
import {
  getPostsByUser,
  createPost,
  updatePost,
  deletePost
} from "@/services/post.service"

const currentUser = inject("currentUser")

const posts = ref([])

const form = ref({
  id: null,
  title: "",
  content: "",
  image: "" // base64
})

/* load bài */
const loadPosts = async () => {
  posts.value = await getPostsByUser(currentUser.value.id)
}

onMounted(loadPosts)

/* chọn bài */
const selectPost = (post) => {
  form.value = { ...post }
}

/* upload ảnh */
const handleImage = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    form.value.image = reader.result
  }
  reader.readAsDataURL(file)
}

/* đăng bài */
const handleCreate = async () => {
  if (!form.value.title || !form.value.content) return

  const summary = form.value.content.slice(0, 120) + "..."

  await createPost({
    title: form.value.title,
    content: form.value.content,
    summary,
    image: form.value.image,
    userId: currentUser.value.id,
    author: currentUser.value.name
  })

  resetForm()
  loadPosts()
}

/* cập nhật */
const handleUpdate = async () => {
  await updatePost(form.value.id, form.value)
  resetForm()
  loadPosts()
}

/* xóa */
const handleDelete = async (id) => {
  await deletePost(id)
  loadPosts()
}

/* reset */
const resetForm = () => {
  form.value = { id: null, title: "", content: "", image: "" }
}
</script>

<template>
  <div class="row g-4">
    <!-- FORM -->
    <div class="col-md-8">
      <h4>✍️ Đăng / Chỉnh sửa bài viết</h4>

      <div class="card p-3">
        <input
          v-model="form.title"
          class="form-control mb-2"
          placeholder="Tiêu đề"
        />

        <textarea
          v-model="form.content"
          class="form-control mb-2"
          rows="5"
          placeholder="Nội dung"
        ></textarea>

        <!-- UPLOAD ẢNH -->
        <input
          type="file"
          class="form-control mb-2"
          accept="image/*"
          @change="handleImage"
        />

        <!-- PREVIEW -->
        <img
          v-if="form.image"
          :src="form.image"
          style="width: 150px; height: 100px; object-fit: cover"
          class="img-fluid rounded mb-2"
        />

        <div class="d-flex gap-2">
          <button class="btn btn-primary" @click="handleCreate">
            Đăng bài
          </button>

          <button
            class="btn btn-warning"
            :disabled="!form.id"
            @click="handleUpdate"
          >
            Chỉnh sửa
          </button>
        </div>
      </div>
    </div>

    <!-- DANH SÁCH -->
    <div class="col-md-4">
      <h5>📚 Bài viết của bạn</h5>

      <ul class="list-group">
        <li
          v-for="post in posts"
          :key="post.id"
          class="list-group-item"
        >
          <strong>{{ post.title }}</strong>

          <p class="small">{{ post.summary }}</p>

          <div class="btn-group btn-group-sm">
            <button
              class="btn btn-outline-primary"
              @click="selectPost(post)"
            >
              Sửa
            </button>

            <button
              class="btn btn-outline-danger"
              @click="handleDelete(post.id)"
            >
              Xóa
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
