<script setup>
import { ref, onMounted } from "vue"
import PostCard from "../components/PostCard.vue"
import { getAllPosts } from "@/services/post.service"

const posts = ref([])

const loadPosts = async () => {
  posts.value = await getAllPosts()
}

onMounted(loadPosts)
</script>

<template>
  <div class="row">
    <!-- BÊN TRÁI -->
    <div class="col-md-9">
      <h4 class="mb-3">📰 Bảng tin</h4>

      <div class="row g-3">
        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="post in posts"
          :key="post.id"
        >
          <PostCard :post="post" />
        </div>
      </div>
    </div>

    <!-- BÊN PHẢI -->
    <div class="col-md-3">
      <h5 class="mb-3">📌 Nổi bật</h5>

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button class="nav-link active">Tin mới</button>
        </li>
        <li class="nav-item">
          <button class="nav-link">Xem nhiều</button>
        </li>
      </ul>

      <div class="border p-3">
        <ul class="list-group list-group-flush">
          <li
            v-for="post in posts.slice(0, 5)"
            :key="post.id"
            class="list-group-item"
          >
            🔥 {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
