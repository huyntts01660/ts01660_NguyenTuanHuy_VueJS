<template>
  <div>
    <!-- Carousel -->
    <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
      
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">

        <!-- Slide 1 -->
        <div class="carousel-item active">
          <img
            src="/images/banner1.jpg"
            class="d-block w-100"
            alt="Slide 1"
          />

          <div class="carousel-caption d-none d-md-block">
            <h3>Tiêu đề bài viết 1</h3>
            <p>Mô tả ngắn bài viết 1</p>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <img
            src="/images/banner2.jpg"
            class="d-block w-100"
            alt="Slide 2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Tiêu đề bài viết 2</h3>
            <p>Mô tả ngắn bài viết 2</p>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <img
            src="/images/banner3.jpg"
            class="d-block w-100"
            alt="Slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h3>Tiêu đề bài viết 3</h3>
            <p>Mô tả ngắn bài viết 3</p>
          </div>
        </div>

      </div>

      <!-- Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 8px;
}
</style>
