<template>
  <div class="card h-100">
    <img
      v-if="post.image"
      :src="post.image"
      class="card-img-top post-image"
    />

    <div class="card-body d-flex flex-column">
      <h6 class="card-title">{{ post.title }}</h6>
      <p class="card-text text-muted small">
        {{ post.summary }}
      </p>

      <router-link
        :to="`/post/${post.id}`"
        class="btn btn-outline-primary btn-sm mt-auto"
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

<style scoped>
.post-image {
  height: 160px;
  object-fit: cover;
}
</style>
