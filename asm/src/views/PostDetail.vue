<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"
import { getCommentsByPost, createComment } from "@/services/comment.service"

const route = useRoute()

const currentUser = ref(
  JSON.parse(localStorage.getItem("user"))
)

const post = ref(null)
const comments = ref([])
const content = ref("")

const loadPost = async () => {
  const res = await axios.get(
    `http://localhost:3000/posts/${route.params.id}`
  )
  post.value = res.data
}

const loadComments = async () => {
  comments.value = await getCommentsByPost(route.params.id)
}

const handleComment = async () => {
  if (!content.value || !currentUser.value) return

  await createComment({
    postId: post.value.id,
    userId: currentUser.value.id,
    author: currentUser.value.name,
    content: content.value,
    createdAt: new Date().toISOString()
  })

  content.value = ""
  loadComments()
}

onMounted(() => {
  loadPost()
  loadComments()
})
</script>


<template>
  <div class="container my-4" v-if="post">
    <!-- TIÊU ĐỀ -->
    <h2 class="mb-3">{{ post.title }}</h2>

    <!-- ẢNH -->
    <img
      v-if="post.image"
      :src="post.image"
      class="img-fluid rounded mb-4"
      style="max-height: 350px; object-fit: cover"
    />

    <!-- NỘI DUNG -->
    <p class="lh-lg">{{ post.content }}</p>

    <hr />

    <!-- FORM BÌNH LUẬN -->
    <h5 class="mb-3">💬 Bình luận</h5>

    <div v-if="currentUser" class="mb-3">
      <textarea
        v-model="content"
        class="form-control"
        rows="3"
        placeholder="Chia sẻ cảm nhận của bạn..."
      ></textarea>
      <button class="btn btn-primary btn-sm mt-2" @click="handleComment">
        Gửi bình luận
      </button>
    </div>

    <p v-else class="text-muted">
      👉 Vui lòng đăng nhập để bình luận
    </p>

    <!-- DANH SÁCH BÌNH LUẬN -->
    <ul class="list-group mt-3">
      <li
        v-for="c in comments"
        :key="c.id"
        class="list-group-item"
      >
        <strong>{{ c.author }}</strong>
        <span class="text-muted small">
          · {{ new Date(c.createdAt).toLocaleString() }}
        </span>
        <p class="mb-0 mt-1">{{ c.content }}</p>
      </li>
    </ul>
  </div>
</template>
