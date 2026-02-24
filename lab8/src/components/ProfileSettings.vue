<template>
  <div class="container mt-5">

        <h3 class="text-primary mb-4">
          ⚙️ Cài đặt người dùng
        </h3>

        <form>

          <!-- Ngôn ngữ -->
          <div class="mb-3">
            <label class="form-label">Ngôn ngữ:</label>
            <select class="form-select">
              <option>Tiếng Việt</option>
              <option>English</option>
            </select>
          </div>

          <!-- Thông báo email -->
          <div class="form-check">
            <input 
              class="form-check-input" 
              type="checkbox" 
              checked 
              id="emailNotify"
            />
            <label class="form-check-label" for="emailNotify">
              Thông báo email
            </label>
          </div>

        </form>

      </div>

</template>

<script>
export default {
  name: 'ProfileSettings'
}
</script>