<template>
  <div id="app">
    <title>なかのゆうたのポートフォリオ紹介</title>
  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="/">Nakano Yuuta</a>
  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="ナビゲーションの切替">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active"><a class="nav-link"  href="/portfolio">Portfolio</a></li>
      <li class="nav-item active"><a class="nav-link"  href="/about">About</a></li>
      <li class="nav-item active"><a class="nav-link"  href="/touch">Get in Touch</a></li>
    </ul>
  </div>
  </nav>
       <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'app'
}
Vue.component('Home')
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
