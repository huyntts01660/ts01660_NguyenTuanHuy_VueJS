<template>
  <div>

    <hr class="opacity-0 my-4">

    <!-- CONTENT -->
    <div class="bg-light py-4">
      <div class="container bg-white p-4 shadow-sm rounded">
        <div class="row">

          <!-- SIDEBAR -->
          <aside class="col-md-4">
            <h2 class="text-info mb-3">Về tôi</h2>

            <div class="card mb-4">
              <img src="/images/avatar.png" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">Giới thiệu bản thân</h5>
                <p class="card-text">
                  TS. Trần Hoàng, Tổ chức tư vấn sức khỏe quốc tế độc lập<br>
                  Châm ngôn: Ta không được chọn nơi mình sinh ra,
                  nhưng ta được chọn cách mình sẽ sống
                </p>
              </div>
            </div>

            <h3 class="text-info mt-2">Chuyên mục</h3>
            <ul class="list-group">
              <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
                Chế độ tập
                <span class="badge bg-primary rounded-pill">12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Chế độ dinh dưỡng
                <span class="badge bg-primary rounded-pill">15</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Cẩm nang cuộc sống
                <span class="badge bg-primary rounded-pill">99</span>
              </li>
            </ul>
          </aside>

          <!-- MAIN CONTENT -->
          <section class="col-md-8">
            <h3 class="text-info mb-3">Bài viết của tôi</h3>

            <div class="card">
              <div class="card-body">
                <div class="row">

                  <!-- BÀI VIẾT CHÍNH -->
                  <div class="col-md-8">
                    <div class="card mb-3">
                      <div class="card-body">
                        <h5 class="card-title">
                          Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                          <span class="badge bg-secondary">16</span>
                        </h5>
                        <img src="/images/tap-piltes.jpg" class="card-img-top mb-2" alt="">
                        <p class="card-text">
                          Ngoài việc giúp cải thiện vóc dáng, cải thiện sự linh hoạt...
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- BÀI VIẾT NỔI BẬT -->
                  <div class="col-md-4">
                    <div class="card h-100">
                      <div class="card-body">

                        <div
                          v-for="(post, index) in hotPosts"
                          :key="index"
                          class="d-flex mb-3"
                        >
                          <img
                            :src="post.image"
                            class="img-fluid me-3"
                            style="width:70px;height:70px;object-fit:cover;"
                          >
                          <div>
                            <h6 class="mb-1">{{ post.title }}</h6>
                            <small class="text-muted">
                              <i class="fa fa-comment"></i> {{ post.comments }}
                            </small>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

                <div class="text-center mt-3">
                  <a class="btn btn-info text-white">Xem thêm</a>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      hotPosts: [
        {
          title: 'Biết ơn đời, đời sẽ thương ta',
          comments: 30,
          image: '/images/corevalue.jpg'
        },
        {
          title: '9 tác dụng tuyệt vời của quả cam',
          comments: 28,
          image: '/images/orange_300x300.jpg'
        },
        {
          title: '10 công dụng bất ngờ từ dầu dừa',
          comments: 15,
          image: '/images/sesameoil_300x300.jpg'
        },
        {
          title: 'Lợi ích khi ăn rau mỗi ngày',
          comments: 12,
          image: '/images/spinach_300x300.jpg'
        }
      ]
    }
  }
}
</script>
