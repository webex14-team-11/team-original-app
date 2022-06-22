<template>
  <div class="app">
    <div class="head">
      <h1>Bulletin Board System</h1>
      <h2>みんなの推しチームを知ろう！</h2>
    </div>
    Name
    <div>
      <input type="text" v-model="name" />
    </div>
    <br />
    Team
    <div>
      <select v-model="team">
        <option disabled value="initial">Please Select</option>
        <option value="レバンガ北海道">北海道：レバンガ北海道</option>
        <option value="秋田ノーザンハピネッツ">
          秋田：秋田ノーザンハピネッツ
        </option>
        <option value="新潟アルビレックスBB">新潟：新潟アルビレックスBB</option>
        <option value="群馬クレインサンダーズ">
          群馬：群馬クレインサンダーズ
        </option>
        <option value="宇都宮ブレックス">栃木：宇都宮ブレックス</option>
        <option value="茨城ロボッツ">茨城：茨城ロボッツ</option>
        <option value="アルバルク東京">東京：アルバルク東京</option>
        <option value="サンロッカーズ渋谷">東京：サンロッカーズ渋谷</option>
        <option value="川崎ブレイブサンダー">東京：川崎ブレイブサンダー</option>
        <option value="横浜ビー・コルセアーズ">
          神奈川：横浜ビー・コルセアーズ
        </option>
        <option value="千葉ジェッツ">千葉：千葉ジェッツ</option>
        <option value="富山グラウジーズ">富山：富山グラウジーズ</option>
        <option value="信州ブレイブウォリアーズ">
          長野：信州ブレイブウォリアーズ
        </option>
        <option value="三遠ネオフェニックス">愛知：三遠ネオフェニックス</option>
        <option value="名古屋ダイアモンドドルフィンズ">
          愛知：名古屋ダイアモンドドルフィンズ
        </option>
        <option value="シーホース三河">愛知：シーホース三河</option>
        <option value="滋賀レイクスターズ">滋賀：滋賀レイクスターズ</option>
        <option value="京都ハンナリーズ">京都：京都ハンナリーズ</option>
        <option value="大阪エヴォッサ">大阪：大阪エヴォッサ</option>
        <option value="島根スサノオマジック">島根：島根スサノオマジック</option>
        <option value="広島ドラゴンフライズ">広島：広島ドラゴンフライズ</option>
        <option value="琉球ゴールデンキングス">
          沖縄：琉球ゴールデンキングス
        </option>
      </select>
    </div>
    <br />
    Comment
    <div>
      <textarea v-model="comment"></textarea>
    </div>
    <br />
    <button v-on:click="postTweet">Submit</button>
    <br />
    <br />
  </div>
  <div>{{ tweet }}</div>
  <div class="post">
    <h2 class="postlist">Post list</h2>
    <div class="content">
      <div v-for="tweet in tweets" :key="tweet.name">
        <hr />
        <a
          >Name：
          <div class="list">{{ tweet.name }}</div></a
        >
        <a
          >Team：
          <div class="list">{{ tweet.team }}</div></a
        >
        <a
          >comment：
          <div class="list">{{ tweet.comment }}</div></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      name: "",
      comment: "",
      team: "",
      tweets: [],
    }
  },
  methods: {
    postTweet() {
      let tweet = {
        name: this.name,
        team: this.team,
        comment: this.comment,
      }
      if ((this.name == "") | (this.team == "") | (this.comment == "")) {
        alert("全ての項目を入力してください")
      } else {
        addDoc(collection(db, "tweets"), tweet).then((ref) => {
          this.tweets.push({
            id: ref.id,
            ...tweet,
          })
        })
      }
      this.name = ""
      this.team = ""
      this.comment = ""
    },
  },
  created: function () {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #f7f7f7;
}
.head {
  -webkit-border-radius: 6px 6px 0px 0px;
  -moz-border-radius: 6px 6px 0px 0px;
  border-radius: 6px 6px 0px 0px;
  background-color: #98cbb3;
}
h1 {
  text-align: center;
  padding: 18px 0 0 0;
  font-size: 2em;
  color: #4e4e4e;
}
h2 {
  text-align: center;
  padding: 0 0 18px 0;
  font-size: 1.2em;
  color: #ffffff;
}
input,
select,
textarea {
  font-size: 1em;
  font-weight: 700;
  padding: 15px 10px 10px;
  font-family: "Source Sans Pro", arial, sans-serif;
  border: 1px solid #bbbbbb;
  background: #c5c5c5;
  color: #fafafa;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
}
button {
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #98cbb3;
  padding: 12px 45px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #98cbb3;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  width: 30%;
  color: #fff;
}
button:hover,
.button:hover {
  background: #83b09b;
}
.postlist {
  font-size: 2em;
  color: #4e4e4e;
  border-bottom: 3px solid rgb(137, 137, 137);
}
.post {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #f7f7f7;
}
.content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #edebeb;
}
.list {
  position: absolute;
  font-size: 1em;
  font-weight: 700;
  padding: 15px 10px 15px 10px;
  font-family: "Source Sans Pro", arial, sans-serif;
  border: 1px solid #bbbbbb;
  background: #c5c5c5;
  color: #fafafa;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 800px;
}
</style>
