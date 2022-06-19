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
      <h1>About</h1>
      <h2><span>01</span>B-league全体チーム数</h2>
      <div class="number-team">
        <img class="pyramid" src=@/assets/pyramid.png />
        <div class="right">
          <p class="text">B-leagueには、B1・B2・B3の3つのリーグが存在!</p>
          <p class="text">B1は24チーム、B2は14チーム、B3は17チーム</p>
          <p class="text">レギュラーシーズンは9月〜5月</p>
          <p class="text"><b> 今回はB1を取り上げて説明します！</b></p>
        </div>
      </div>
      <h2><span>02</span>レギュラーシーズンについて！</h2>
      <div class="regular">
        <div class="right">
          <p class="text">
            「レギュラーシーズン」とは、シーズン通して行われる試合のことです
          </p>
          <p class="text">
            B1リーグでは、それぞれ24チームが8チームずつ3地区に分かれてレギュラーシーズンを戦っていく
          </p>
          <p class="text">B1では、各チームがそれぞれ<b>60</b>試合を行います!</p>
          <p class="text">
            レギュラーシーズンでは勝率で順位が決まり、勝率が高いチームが次の「B.LEAGUE
            CHAMPIONSHIP」に進むことができます。
          </p>
        </div>
      </div>
      <h2><span>03</span>B.LEAGUE CHAMPIONSHIPについて！</h2>
      <div class="chanpionship">
        <div class="right">
          <p class="text">
            「B.LEAGUE CHAMPIONSHIP」に出場できるチームは以下のチームです。
          </p>
          <ul>
            <li>東・西地区の各上位3チーム</li>
            <li>上記以外のチームの中での上位2チーム</li>
          </ul>
          <b>!!☆勝ったチームがBリーグのチャンピオン☆!!</b>
        </div>
      </div>
      <h2><span>04</span>オールスターについて！</h2>
      <div class="allstar">
        <img class="allstar_logo" src=@/assets/allstar.png />
        <div class="right">
          <p class="text">
            「オールスター」は、レギュラーシーズンの中旬に行われる<br />バスケットボールの夢の祭典です。
          </p>
          <p class="text">
            "普段見られないプロ選手の一面"や、"プロ選手のレベルの高さ"<br />を感じられる!
          </p>
        </div>
      </div>
      <h2><span>05</span>入れ替え戦について！</h2>
      <div class="chenge">
        <div class="right"></div>
      </div>
    </div>
    <div class="attraction" id="attraction">
      <h1>attraction</h1>
      <div class="attraction" id="attraction">
        <h2><span>01</span>観戦初心者に最適！！</h2>
        <div class="attraction1">
          <!--<img class="pyramid" src=@/assets/pyramid.png />-->
          <div class="right">
            <p class="text">
              室内観戦なので天候の左右・日焼けなど気にせず楽しめる！
            </p>
            <p class="text">↓ ルールが分からなくても楽しめる！</p>
            <ul>
              <li>展開が早い！</li>
              <li>盛り上がるチャンスが多い！</li>
              <li>距離が近いから一体感・スピード感を味わえる！</li>
              <li>かっこいいプレーが多い！</li>
            </ul>
          </div>
        </div>
      </div>
      <h2><span>02</span>試合前後・途中のアトラクション！</h2>
      <div class="attraction2">
        <img class="cheer" src=@/assets/cheer.jpg />
        <div class="right">
          <ul>
            <li>チアリーディング</li>
            <li>アーティストパフォーマンス</li>
            <li>観客参加型イベント</li>
            <li>キッズエリア</li>
          </ul>
          <p class="text">
            各チームにそれぞれチアリーディングが存在！<br />新たな推しに出会えるかも！？
          </p>
        </div>
      </div>
      <h2><span>03</span>グルメも満喫できる！</h2>
      <div class="attraction3">
        <img class="food" src=@/assets/food.jpg />
        <div class="right">
          <p class="text">それぞれのチームのご当地グルメ！</p>
          <p class="text">豊富な屋台！オリジナルメニューも！</p>
          <p class="text">毎回お祭り気分が味わえる！</p>
        </div>
      </div>
    </div>
    <div class="method" id="method">
      <h1>method</h1>
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
  width: 1280px;
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
.about {
  margin: 50px 40px 80px 40px;
  background-color: rgb(242, 241, 241);
}
.about h2 {
  position: relative;
  margin: 0 10rem 0 10rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  border-bottom: 3px solid #000;
}
.about h2 span {
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-size: 5rem;
  line-height: 1;
  position: absolute;
  bottom: -1.6rem;
  left: 0;
}
.number-team {
  display: flex;
  width: 100%;
  margin: 30px auto;
  max-width: 800px;
}
.pyramid {
  width: 300px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}
.number-team .right {
  margin: 0 0 0 20px;
  padding: 0;
  text-align: left;
}

.number-team .text {
  margin: 10px 0 0;
  padding: 0;
}
.regular {
  margin: 30px auto;
}
.chanpionship {
  margin: 30px auto;
}
.chanpionship ul {
  margin: 0 510px 0 510px;
}
.chanpionship ul li {
  text-align: left;
}
.allstar {
  display: flex;
  width: 100%;
  margin: 30px auto;
  max-width: 800px;
}
.allstar_logo {
  width: 300px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}
.allstar .right {
  margin: 0 0 0 20px;
  padding: 0;
  text-align: left;
}

.allstar .text {
  margin: 10px 0 0;
  padding: 0;
}
.attraction {
  margin: 50px 40px 80px 40px;
  background-color: rgb(226, 225, 225);
}
.attraction h2 {
  position: relative;
  margin: 0 10rem 0 10rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  border-bottom: 3px solid #000;
}
.attraction h2 span {
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-size: 5rem;
  line-height: 1;
  position: absolute;
  bottom: -1.6rem;
  left: 0;
}
.attraction1 {
  margin: 30px auto;
}
.attraction1 ul {
  margin: 0 430px 0 430px;
}
.attraction1 ul li {
  text-align: left;
}
.attraction2 {
  display: flex;
  width: 100%;
  margin: 30px auto;
  max-width: 800px;
}
.cheer {
  width: 300px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}
.attraction2 .right {
  margin: 0 0 0 20px;
  padding: 0;
  text-align: left;
}

.attraction2 .text {
  margin: 10px 0 0;
  padding: 0;
}
.attraction3 {
  display: flex;
  width: 100%;
  margin: 30px auto;
  max-width: 800px;
}
.food {
  width: 300px;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  overflow: hidden;
  position: relative;
}
.attraction3 .right {
  margin: 0 0 0 20px;
  padding: 0;
  text-align: left;
}

.attraction3 .text {
  margin: 10px 0 0;
  padding: 0;
}
</style>
