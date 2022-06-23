<template>
  <div class="app">
    <div class="head">
      <h1>Bulletin Board System</h1>
      <h2>みんなに推しチームを共有しよう！</h2>
    </div>
    Name
    <div>
      <input type="text" v-model="name" placeholder="ニックネーム" />
    </div>
    <br />
    Team
    <div>
      <select v-model="team">
        <option value="" disabled selected>Please select</option>
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
      <textarea
        v-model="comment"
        placeholder="ex) 〇〇選手かっこいい！〇〇のセットプレーがすごい！チアが可愛い！etc.."
      ></textarea>
    </div>
    <br />
    <button v-on:click="postTweet">Submit</button>
    <br />
    <br />
  </div>
  <div>{{ tweet }}</div>
  <div class="post">
    <div class="postlist">
      <h2>Post list</h2>
      <h3>みんなの推しチームを知ろう！</h3>
    </div>
    <div v-for="tweet in tweets" :key="tweet.name">
      <div class="content">
        <h3 class="head2">Name</h3>
        <h4 class="list">{{ tweet.name }}</h4>
        <h3 class="head2">Team</h3>
        <h4 class="list">{{ tweet.team }}</h4>
        <h3 class="head2">Comment</h3>
        <h4 class="list">{{ tweet.comment }}</h4>
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
      timestamp: "",
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
  max-width: 60%;
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
  -webkit-border-radius: 6px 6px 0px 0px;
  -moz-border-radius: 6px 6px 0px 0px;
  border-radius: 6px 6px 0px 0px;
  background-color: #98cbb3;
}
.postlist h2 {
  text-align: center;
  padding: 18px 0 0 0;
  font-size: 2em;
  color: #4e4e4e;
}
.postlist h3 {
  text-align: center;
  padding: 0 0 18px 0;
  font-size: 1.2em;
  color: #ffffff;
}
.post {
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #f7f7f7;
  margin-top: 45px;
  margin-bottom: 45px;
  padding-bottom: 20px;
}
.content {
  background: #f7f7f7;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 30px;
  border: solid 3px rgb(137, 137, 137);
  border-radius: 10px;
}
.head2 {
  border-bottom: 2px solid rgb(137, 137, 137);
  font-weight: 200;
  color: #7c7c7c;
}
.list {
<<<<<<< HEAD
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
=======
  font-weight: 900;
  color: black;
  transition: all 0.8s;
  transition: color 0.8;
}
.list:hover {
  transform: scale(1.2, 1.2);
  color: #98cbb3;
>>>>>>> origin/BBS
}
</style>
