<template>
  <div id="home">
    <img src="@/assets/b-league.png" />
  </div>
  <h1 class="title">
    Introduce of B.LEAGUE
    <p class="title">Recomend the B.LEAGUE</p>
  </h1>
  <div class="nav2">
    <div class="basicKowlage">
      <h2 class="basicKowlage">Basic Knowlage</h2>

      <h3 class="basicKowlage">
        ルール
        <p>ポジション</p>
      </h3>

      <div class="button1">
        <a href="@/views/BasicKnowledge.vue">Learn more</a>
      </div>
    </div>
    <div class="aboutBleague">
      <h2 class="aboutBleague">About B.LEAGUE</h2>
      <h3 class="aboutBleague">
        Bリーグの魅力を紹介！
        <p class="aboutBleague">バスケ観戦の仕方を紹介！</p>
      </h3>
      <div class="button1">
        <a href="@/views/BleagueView.vue">Learn more</a>
      </div>
    </div>
    <div class="map">
      <h2 class="map">Map</h2>
      <h3 class="map">
        各都道府県のチームの本拠地をマップ上で掲載！
        <p class="map">各チームの魅力・特色を紹介！</p>
      </h3>
      <div class="button1">
        <a href="@/views/MapView.vue">Learn more</a>
      </div>
    </div>
    <div class="BBS">
      <h2 class="BBS">BBS</h2>
      <h3 class="BBS">
        掲示板！
        <p>みんなの推しチームを紹介！</p>
      </h3>
      <div class="button1">
        <a href="@/views/BBS.vue">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
img {
  width: 85%;
}
h1 {
  margin: 0 auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 55px;
  color: #000000;
}
p.title {
  margin: 0.025em 0px;
}
.nav2 {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(226, 223, 223);
  padding-bottom: 20px;
  padding-left: 150px;
  width: 100%;
}
.nav2 > .basicKowlage {
  width: 50%;
}
.nav2 > .map {
  width: 50%;
}
.basicKowlage {
  text-align: left;
  padding-left: 30px;
}
h2.basicKowlage {
  font-family: "Montserrat";
  font-style: bold;
  font-size: 45px;
  color: #000000;
}
h3.basicKowlage {
  list-style: square;
  font-size: 20px;
  font-style: bold;
}
.aboutBleague {
  text-align: left;
  padding-right: 30px;
}
h2.aboutBleague {
  font-family: "Montserrat";
  font-style: bold;
  font-size: 45px;
  color: #000000;
}
h3.aboutBleague {
  text-align: left;
  font-size: 20px;
  font-style: bold;
}
.map {
  text-align: left;
  padding-left: 30px;
}
h2.map {
  font-family: "Montserrat";
  font-style: bold;
  font-size: 45px;
  color: #000000;
}
h3.map {
  text-align: left;
  font-style: bold;
  font-size: 20px;
}
.BBS {
  text-align: left;
  padding-right: 30px;
}
h2.BBS {
  font-family: "Montserrat";
  font-style: bold;
  font-size: 45px;
  color: #000000;
}
h3.BBS {
  text-align: left;
  font-style: bold;
  font-size: 20px;
}
.button1 a {
  background: #eee;
  border-radius: 3px;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 280px;
  padding: 10px 25px;
  color: #313131;
  transition: 0.3s ease-in-out;
  font-weight: 500;
}
.button1 a:after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #313131;
  border-right: 3px solid #313131;
  transform: rotate(45deg) translateY(-50%);
  position: absolute;
  top: 50%;
  right: 20px;
  border-radius: 1px;
  transition: 0.3s ease-in-out;
}
.button1 a:hover {
  background: #313131;
  color: #fff;
}
.button1 a:hover:after {
  border-color: #fff;
}
</style>
