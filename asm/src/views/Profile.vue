<script setup>
import { ref, inject, onMounted } from "vue"
import axios from "axios"

const currentUser = inject("currentUser")

const form = ref({
  name: "",
  email: "",
  password: "",
  avatar: ""
})

/* load thông tin user */
onMounted(() => {
  if (currentUser.value) {
    form.value = {
      name: currentUser.value.name,
      email: currentUser.value.email,
      password: "",
      avatar: currentUser.value.avatar
    }
  }
})

/* đổi avatar */
const handleAvatar = (e) => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    form.value.avatar = reader.result // base64
  }
  reader.readAsDataURL(file)
}


/* cập nhật */
const onUpdate = async () => {
  if (!currentUser.value) return

  const updatedUser = {
    ...currentUser.value,
    name: form.value.name,
    email: form.value.email,
    avatar: form.value.avatar,
    ...(form.value.password && { password: form.value.password })
  }

  await axios.put(
    `http://localhost:3000/users/${currentUser.value.id}`,
    updatedUser
  )

  currentUser.value = updatedUser
  alert("✅ Cập nhật thông tin thành công!")
}
</script>

<template>
  <h4 class="mb-3">👤 Thông tin cá nhân</h4>

  <div class="row g-3" v-if="currentUser">
    <!-- BÊN TRÁI -->
    <div class="col-md-8">
      <div class="card p-3">
        <div class="row g-3">
          <!-- AVATAR -->
          <div class="col-md-4 text-center">
            <img
              :src="form.avatar"
              class="img-fluid rounded mb-2"
              style="max-height: 150px; object-fit: cover"
            />
            <input
              type="file"
              class="form-control form-control-sm"
              @change="handleAvatar"
            />
          </div>

          <!-- FORM -->
          <div class="col-md-8">
            <div class="mb-2">
              <label class="form-label">Họ tên</label>
              <input class="form-control form-control-sm" v-model="form.name" />
            </div>

            <div class="mb-2">
              <label class="form-label">Email</label>
              <input class="form-control form-control-sm" v-model="form.email" />
            </div>

            <div class="mb-2">
              <label class="form-label">Mật khẩu mới</label>
              <input
                type="password"
                class="form-control form-control-sm"
                v-model="form.password"
              />
            </div>

            <button class="btn btn-primary btn-sm mt-2" @click="onUpdate">
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- BÊN PHẢI -->
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-header fw-bold">
          ⭐ Bài viết yêu thích
        </div>
        <ul class="list-group list-group-flush small">
          <li class="list-group-item text-muted">
          </li>
        </ul>
      </div>
    </div>
  </div>

  <p v-else class="text-muted">
    👉 Vui lòng đăng nhập để xem thông tin cá nhân
  </p>
</template>
