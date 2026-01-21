<template>
  <div class="bg-light py-4">
    <div class="container bg-white p-4 shadow-sm rounded">
      <div class="row">

        <!-- CỘT TRÁI: CHUYÊN MỤC + BÀI VIẾT NỔI BẬT -->
        <div class="col-md-3">

          <!-- CHUYÊN MỤC (TĨNH) -->
          <h5 class="text-info mb-3">Chuyên mục</h5>
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

          <!-- BÀI VIẾT NỔI BẬT -->
          <h5 class="text-info mt-4">Bài viết nổi bật</h5>

          <div
            v-for="(item, index) in hotPosts"
            :key="index"
            class="d-flex mb-3 align-items-center"
          >
            <img
              :src="item.image"
              class="rounded-circle me-3"
              style="width:60px;height:60px;object-fit:cover;"
            />
            <div>
              <h6 class="mb-0">{{ item.title }}</h6>
              <small class="text-muted">
                <i class="fa fa-comment"></i> {{ item.comments }}
              </small>
            </div>
          </div>
        </div>

        <!-- CỘT PHẢI: TẤT CẢ BÀI VIẾT -->
        <div class="col-md-9">
          <h5 class="text-info mb-3">Tất cả bài viết</h5>

          <div class="row row-cols-1 row-cols-md-4 g-3">
            <div
              class="col"
              v-for="(post, index) in posts"
              :key="index"
            >
              <router-link
                :to="'/posts/' + index"
                class="text-decoration-none text-dark"
              >
                <div class="card h-100">
                  <img
                    :src="post.image"
                    class="card-img-top"
                    style="height:180px;object-fit:cover;"
                  />
                  <div class="card-body">
                    <h6>{{ post.title }}</h6>
                    <p class="small text-muted">
                      {{ post.desc }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- PHÂN TRANG TĨNH -->
<nav class="mt-4">
  <ul class="pagination justify-content-center">

    <li class="page-item disabled">
      <a class="page-link" href="#">«</a>
    </li>

    <li class="page-item active">
      <a class="page-link" href="#">1</a>
    </li>

    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>

    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>

    <li class="page-item">
      <a class="page-link" href="#">»</a>
    </li>

  </ul>
</nav>

        </div>      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',

  data() {
    return {
      hotPosts: [
        {
          title: 'Biết ơn đời, đời sẽ thương ta',
          comments: 30,
          image: '/images/corevalue.jpg'
        },
        {
          title: '9 tác dụng tuyệt vời của cam',
          comments: 28,
          image: '/images/orange_300x300.jpg'
        },
        {
          title: '10 công dụng bất ngờ từ dầu dừa',
          comments: 15,
          image: '/images/sesameoil_300x300.jpg'
        }
      ],

      posts: [
        {
          title: 'Phương pháp tập Pilates giúp hồi sinh cột sống',
          desc: 'Người tập Pilates có thể cải thiện sức khỏe cột sống...',
          image: '/images/tap-piltes.jpg'
        },
        {
          title: 'Dây kháng lực – trợ thủ đắc lực cho Pilates',
          desc: 'Dụng cụ hỗ trợ giúp bài tập hiệu quả hơn...',
          image: '/images/tap-pilates1.jpg'
        },
        {
          title: 'EAT CLEAN – Nên và không nên',
          desc: 'Chế độ ăn sạch mang lại nhiều lợi ích sức khỏe...',
          image: '/images/tim-mach.jpg'
        },
        {
          title: 'Ăn uống khoa học giúp sống khỏe mỗi ngày',
          desc: 'Kết hợp dinh dưỡng và luyện tập hợp lý...',
          image: '/images/eat-clean.png'
        }
      ]
    }
  }
}
</script>
