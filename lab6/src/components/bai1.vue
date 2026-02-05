<template>
  <div>
    <h2>Nhập điểm của bạn</h2>
    <input type="number" v-model.number="dtb" />
  </div>

  <p v-if="dtb < 5 && dtb >= 0">Xếp loại: Yếu</p>
  <p v-else-if="dtb >= 5 && dtb < 6.5">Xếp loại: Trung bình</p>
  <p v-else-if="dtb >= 6.5 && dtb < 8">Xếp loại: Khá</p>
  <p v-else-if="dtb >= 8 && dtb < 9">Xếp loại: Giỏi</p>
  <p v-else-if="dtb >= 9 && dtb <= 10">Xếp loại: Xuất sắc</p>
  <p v-else>Vui lòng nhập điểm hợp lệ (0 – 10)</p>
</template>

<script setup>
import { ref } from 'vue'

const dtb = ref('')
</script>

<style>
</style>
