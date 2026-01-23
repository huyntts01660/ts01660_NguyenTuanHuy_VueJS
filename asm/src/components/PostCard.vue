<template>
  <div class="card mb-4">
    <img :src="post.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.summary }}</p>
      <router-link
        :to="`/post/${post.id}`"
        class="btn btn-outline-primary btn-sm"
      >
        Xem chi tiết
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: Object
})
</script>
