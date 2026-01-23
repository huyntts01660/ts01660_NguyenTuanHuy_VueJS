<script setup>
import PostCard from '../components/PostCard.vue'

const posts = [
  {
    id: 1,
    title: 'Chạy bộ mỗi sáng giúp cơ thể khỏe mạnh hơn',
    summary: 'Hôm nay là ngày đẹp trời, mình bắt đầu thói quen chạy bộ buổi sáng và nhận thấy sức khỏe cải thiện rõ rệt chỉ sau 2 tuần...',
    image: 'public/images/chaybo.jpg'
  },
  {
    id: 2,
    title: '5 bài tập thể dục đơn giản tại nhà',
    summary: 'Không cần đến phòng gym, bạn vẫn có thể tập luyện hiệu quả với 5 bài tập thể dục đơn giản ngay tại nhà...',
    image: 'public/images/theduc.jpg'
  },
  {
    id: 3,
    title: 'Cách nấu món trứng chiên ngon cho bữa sáng',
    summary: 'Bữa sáng nhanh gọn với món trứng chiên tưởng chừng đơn giản nhưng có vài mẹo nhỏ giúp món ăn thơm ngon hơn...',
    image: 'public/images/trung.jpg'
  },
  {
    id: 4,
    title: 'Món canh rau thanh mát cho ngày hè',
    summary: 'Những ngày nắng nóng, một bát canh rau thanh mát sẽ giúp cơ thể giải nhiệt và ăn uống ngon miệng hơn...',
    image: 'public/images/canhrau.jpg'
  },
  {
    id: 5,
    title: 'Uống đủ nước mỗi ngày quan trọng thế nào?',
    summary: 'Nhiều người thường quên uống nước đầy đủ mỗi ngày, điều này ảnh hưởng rất lớn đến sức khỏe và làn da...',
    image: 'public/images/nuoc.jpg'
  },
  {
    id: 6,
    title: 'Ngủ sớm – thói quen tốt cho sức khỏe',
    summary: 'Ngủ sớm giúp tinh thần minh mẫn hơn, cải thiện trí nhớ và tăng hiệu suất làm việc hằng ngày...',
    image: 'public/images/ngu.jpg'
  },
  {
    id: 7,
    title: 'Ăn uống lành mạnh để bảo vệ sức khỏe',
    summary: 'Chế độ ăn uống lành mạnh đóng vai trò rất quan trọng trong việc duy trì sức khỏe và phòng tránh bệnh tật...',
    image: 'public/images/lanhmanh.jpg'
  }
]
</script>

<template>
  <div class="row">
    <!-- BÊN TRÁI: BẢNG TIN -->
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

    <!-- BÊN PHẢI: TAB -->
    <div class="col-md-3">
      <h5 class="mb-3">📌 Nổi bật</h5>

      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <button
            class="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#new"
            type="button"
          >
            Tin mới
          </button>
        </li>
        <li class="nav-item">
          <button
            class="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#hot"
            type="button"
          >
            Xem nhiều
          </button>
        </li>
      </ul>

      <div class="tab-content border border-top-0 p-3">
        <!-- TAB TIN MỚI -->
        <div class="tab-pane fade show active" id="new">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              🆕 Lợi ích của việc chạy bộ mỗi ngày
            </li>
            <li class="list-group-item">
              🆕 Công thức nấu ăn nhanh cho người bận rộn
            </li>
            <li class="list-group-item">
              🆕 Thói quen sinh hoạt tốt cho sức khỏe
            </li>
          </ul>
        </div>

        <!-- TAB XEM NHIỀU -->
        <div class="tab-pane fade" id="hot">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              🔥 5 bài tập thể dục tại nhà dễ áp dụng
            </li>
            <li class="list-group-item">
              🔥 Ăn uống lành mạnh mỗi ngày
            </li>
            <li class="list-group-item">
              🔥 Ngủ sớm giúp cải thiện sức khỏe
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
