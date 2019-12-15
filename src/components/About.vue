<template>
  <div class = "about">
    <header>
      <div id="title">ABOUT ME</div>
      <div class="animated flash infinite"><a href="#name" @click="clickSmoothScroll()" class="scroll"><img src="../assets/下4.png" alt="矢印"></a>
      </div>
  <div id="hoge"></div>
      <picture>
      <img src="../assets/back-about.1205.jpg" alt="写真" id="cafe">
      </picture>
    </header>
    <main>
      <div id="name">名前：Nakano yuuta</div>
      <div id="technolgy">技術：HTML/CSS/JavaScript/Vue.js/Ruby/Ruby on Rails</div>
      <div id="hobby">趣味：グルメ巡り、カフェ巡り、筋トレ</div>
      <div id="text">
        私は、美味しいものを食べ歩いたり、おしゃれなカフェを巡り、落ちつた空間でコーヒーを飲むのが好きです。仕事の疲れを癒すのにこれ以上のものはありません！<br>私が巡ったグルメたちはInstagramにアップしてるので興味があればぜひ。また、わたしに興味を持って頂けたら、Instagram又はTwitterからDMください。
      </div>
<a  href="https://twitter.com/@y7program" target="_blank" rel="noopener noreferrer"><img src="../assets/Twitter_Logo_Blue.png" alt="ツイッターアカウント" id="twitterlogo"></a>
<a  href="https://www.instagram.com/eating.b.p/" target="_blank" rel="noopener noreferrer"><img src="../assets/glyph-logo_May2016.png" alt="インスタグラムアカウント" id="instagramlogo"></a>
    </main>
    <footer>
      <div>Ⓒ2019.NAKANO YUUTA.ALL RIGHTS RESERVED</div>
      <i class="el-icon-apple"></i>
    </footer>
  </div>
</template>

<script>
import vueSmoothScroll from 'vue-smoothscroll'
import Vue from 'vue'
Vue.use(vueSmoothScroll)
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#hoge'),
        500,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
.scroll {
  margin-left: 1100px;
}
#title {
  font-size: 50px;
  height: 200px;
  margin-top: 80px;
}
#cafe {
  width: 800px;
  height: 600px;
  margin-bottom: 20px;
}
#name {
  margin-top: 30px;
  font-size: 20px;
}
#technolgy {
  font-size: 20px;
}
#hobby {
  margin-bottom: 30px;
  font-size: 20px;
}
#text {
  font-size: 15px;
  width: 400px;
  word-break: break-all;
  text-align: left;
  margin-left: 35%;
}
#twitterlogo {
  width: 60px;
  height: 60px;
  margin-top: 60px;
  margin-right: 10px;
}
#instagramlogo {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
footer {
  font-size: 15px;
  color: silver;
  background-color: #336699;
  padding: 50px 0;
}
</style>
