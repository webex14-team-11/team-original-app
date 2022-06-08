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
      <ul class="basicKowlage-list">
        <li>ルール</li>
        <li>ポジション</li>
      </ul>
      <button class="basicKowlage">Learn more</button>
    </div>
    <div class="aboutBleague">
      <h2 class="aboutBleague">About B.LEAGUE</h2>
      <h3 class="aboutBleague">
        Bリーグの魅力を紹介！
        <p class="aboutBleague">バスケ観戦の仕方を紹介！</p>
      </h3>
      <button class="aboutBleague">Learn more</button>
    </div>
    <div class="map">
      <h2 class="map">Map</h2>
      <h3 class="map">
        各都道府県のチームの本拠地をマップ上で掲載！
        <p class="map">各チームの魅力・特色を紹介！</p>
      </h3>
      <button class="map">Learn more</button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
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
  justify-content: space-between;
  background-color: rgb(226, 223, 223);
}
.nav2 > div {
  width: 100%;
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
.basicKowlage-list {
  list-style: square;
}
.aboutBleague {
  text-align: right;
  padding-right: 30px;
}
h2.aboutBleague {
  font-family: "Montserrat";
  font-style: bold;
  font-size: 45px;
  color: #000000;
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
h2.map {
  text-align: left;
}
</style>
