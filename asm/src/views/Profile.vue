<script setup>
const onUpdate = () => {
  alert("Cập nhật thông tin!");
};
</script>

<template>
  <h4 class="mb-3">👤 Thông tin cá nhân</h4>

  <div class="row g-3">
    <!-- BÊN TRÁI: PROFILE -->
    <div class="col-md-8">
      <div class="card p-3">
        <div class="row g-3 align-items-start">
          <!-- AVATAR -->
          <div class="col-md-4 text-center">
            <div class="card p-2">
              <img
                src="/public/images/avatar.jpg"
                class="img-fluid rounded mb-2"
              />
              <input type="file" class="form-control form-control-sm" />
            </div>
          </div>

          <!-- FORM -->
          <div class="col-md-8">
            <form class="row g-2">
              <div class="col-12">
                <label class="form-label mb-1">Họ tên</label>
                <input
                  class="form-control form-control-sm"
                  value="Nguyễn Tuấn Huy"
                />
              </div>

              <!-- EMAIL XUỐNG DÒNG -->
              <div class="col-12">
                <label class="form-label mb-1">Email</label>
                <input
                  class="form-control form-control-sm"
                  value="huyntts01660@gmail.com"
                />
              </div>

              <div class="col-12">
                <label class="form-label mb-1">Mật khẩu mới</label>
                <input
                  type="password"
                  class="form-control form-control-sm"
                  placeholder="Nhập mật khẩu mới"
                />
              </div>

              <div class="col-12 mt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="onUpdate"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- BÊN PHẢI: BÀI VIẾT YÊU THÍCH -->
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-header fw-bold">
          ⭐ Các bài viết yêu thích của bạn
        </div>
        <ul class="list-group list-group-flush small">
          <li class="list-group-item">
            ❤️ Chạy bộ mỗi sáng giúp tăng cường sức khỏe
          </li>
          <li class="list-group-item">
            ❤️ 5 bài tập thể dục đơn giản tại nhà
          </li>
          <li class="list-group-item">
            ❤️ Chế độ ăn uống lành mạnh mỗi ngày
          </li>
          <li class="list-group-item">
            ❤️ Món ăn nhẹ tốt cho sức khỏe buổi tối
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
