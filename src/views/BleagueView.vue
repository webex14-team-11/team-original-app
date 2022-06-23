<template>
  <div class="bLeague">
    <h1>About B.LEAGUE</h1>
    <div class="square">
      <div class="pic_frame">
        <img class="icon1" src=@/assets/icon1.png />
        <p class="name" id="about">About</p>
        <p class="content">Bリーグとは？</p>
      </div>
      <div class="pic_frame">
        <img class="icon2" src=@/assets/icon2.png />
        <p class="name" id="attraction">Attraction</p>
        <p class="content">Bリーグの魅力は？</p>
      </div>
      <div class="pic_frame">
        <img class="icon3" src=@/assets/icon3.png />
        <p class="name" id="method">Method</p>
        <p class="content">Bリーグの観戦方法！</p>
      </div>
    </div>
    <div class="about" id="about">
      <h1>about</h1>
    </div>
    <div class="attraction" id="attraction">
      <h1>attraction</h1>
      <div class="method" id="method">
        <h1>method</h1>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  margin: 0 auto;
  font-family: "Montserrat";
  font-style: bold;
  font-size: 50px;
  color: #000000;
  padding-bottom: 15px;
}
.square {
  margin: 0 auto;
  width: 85%;
  height: 380px;
  background: rgb(226, 223, 223);
}
.pic_frame {
  display: inline-block;
  text-align: center;
  width: calc(100% / 3);
  padding-top: 60px;
}
.name {
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 30px;
}
.content {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  margin-top: -20px;
}
.icon1 {
  width: 100px;
  height: auto;
}
.icon2 {
  width: 100px;
  height: auto;
}
.icon3 {
  width: 100px;
  height: auto;
}
</style>
