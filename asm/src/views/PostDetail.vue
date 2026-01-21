<template>
  <div class="bg-light py-4">
    <div class="container bg-white p-4 shadow-sm rounded">
      <div class="row">

        <!-- NỘI DUNG BÀI VIẾT -->
        <div class="col-md-8">
          <h3 class="fw-bold mb-3">{{ post.title }}</h3>

          <img
            :src="post.image"
            class="img-fluid rounded mb-3"
            style="max-height:400px;object-fit:cover;"
          />

          <p>{{ post.content }}</p>
        </div>

        <!-- BÌNH LUẬN -->
        <div class="col-md-4">
          <h5 class="fw-bold">Bình luận bài viết</h5>

          <!-- FORM NHẬP BÌNH LUẬN -->
          <div class="mb-3">
            <textarea
              class="form-control mb-2"
              rows="3"
              placeholder="Nhập bình luận của bạn"
              v-model="newComment"
            ></textarea>

            <button class="btn btn-success w-100" @click="addComment">
              Gửi bình luận
            </button>
          </div>

          <!-- DANH SÁCH BÌNH LUẬN -->
          <h5 class="fw-bold mb-3">Danh sách bình luận:</h5>

          <ul class="list-unstyled">
            <li
              v-for="(comment, index) in comments"
              :key="index"
              class="mb-2"
            >
              <strong>{{ comment.author }}:</strong>
              <span> {{ comment.text }}</span>
            </li>

            <li v-if="comments.length === 0" class="text-muted">
              Chưa có bình luận nào
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',

  data() {
    return {
      post: {
        title: 'Phương pháp tập Pilates giúp hồi sinh cột sống',
        content:
          'Pilates là phương pháp tập luyện giúp cải thiện sức khỏe cột sống, tăng sự dẻo dai và giảm đau lưng hiệu quả.',
        image: '/images/tap-piltes.jpg'
      },

      newComment: '',

      comments: [
        { author: 'Bình An', text: 'Bài viết rất hữu ích' },
        { author: 'Bình An', text: 'Cảm ơn những chia sẻ bổ ích' }
      ]
    }
  },

  methods: {
    addComment() {
      if (this.newComment.trim() === '') return

      this.comments.push({
        author: 'Khách',
        text: this.newComment
      })

      this.newComment = ''
    }
  }
}
</script>
