<template>
  <div class="container my-4">
    <!-- TIÊU ĐỀ -->
    <h2 class="mb-3">
      Chạy bộ mỗi sáng giúp cơ thể khỏe mạnh hơn
    </h2>

    <!-- ẢNH BÀI VIẾT -->
    <img
      src="/public/images/chaybo.jpg"
      class="img-fluid mb-4 rounded"
      alt="Chạy bộ buổi sáng"
    />

    <!-- NỘI DUNG -->
    <p>
      Chạy bộ vào buổi sáng là một thói quen tốt giúp tăng cường sức khỏe,
      cải thiện tinh thần và giúp cơ thể tràn đầy năng lượng cho cả ngày dài.
      Chỉ cần 20–30 phút mỗi sáng, bạn đã có thể cảm nhận được sự thay đổi tích cực
      về thể lực và tinh thần.
    </p>

    <p>
      Ngoài ra, chạy bộ còn giúp cải thiện hệ tim mạch, hỗ trợ giảm cân và
      nâng cao chất lượng giấc ngủ. Điều quan trọng là duy trì thói quen đều đặn
      và lựa chọn thời gian, cường độ phù hợp với bản thân.
    </p>

    <hr />

    <!-- BÌNH LUẬN -->
    <h5 class="mb-3">💬 Bình luận</h5>

    <div class="mb-3">
      <textarea
        class="form-control"
        rows="3"
        placeholder="Chia sẻ cảm nhận của bạn..."
      ></textarea>
      <button class="btn btn-primary btn-sm mt-2">
        Gửi bình luận
      </button>
    </div>

    <!-- DANH SÁCH BÌNH LUẬN -->
    <ul class="list-group">
      <li class="list-group-item">
        <strong>Nguyễn Thành Minh</strong>
        <span class="text-muted small"> · 10 phút trước</span>
        <p class="mb-0">
          Mình cũng đang duy trì chạy bộ mỗi sáng, cảm thấy khỏe hơn hẳn 👍
        </p>
      </li>

      <li class="list-group-item">
        <strong>Ngô Phước Thịnh</strong>
        <span class="text-muted small"> · 1 giờ trước</span>
        <p class="mb-0">
          Bài viết rất hữu ích, cảm ơn bạn đã chia sẻ thói quen tốt này.
        </p>
      </li>
    </ul>
  </div>
</template>
