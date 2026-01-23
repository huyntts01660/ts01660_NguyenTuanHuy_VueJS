<template>
  <div class="app-wrapper">
    <Header />

    <main class="content container my-4">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
