<template>
  <div>
    <h1>掲示板</h1>
    <h2>みんなの推しチームを知ろう！</h2>
    名前
    <div>
      <input type="text" v-model="name" />
    </div>
    <br />
    推しチーム
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
    コメント
    <div>
      <textarea v-model="comment"></textarea>
    </div>
    <br />
    <button v-on:click="submitPosts">投稿する</button>
    <br />
    <br />
    <h2>投稿一覧</h2>
    <div v-for="post in posts" :key="post.name">
      <button v-on:click="deleteUser(user.id)">削除</button>
      <hr />
      <p>名前：{{ post.fields.name.stringValue }}</p>
      <p>推しチーム：{{ post.fields.team.stringValue }}</p>
      <p>コメント：{{ post.fields.comment.stringValue }}</p>
    </div>
  </div>
</template>

<script>
axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/b-league-introduction/databases/(default)/documents/comments"

import axios from "axios"
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: "",
      team: "",
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    submitPosts() {
      axios
        .post(axios.defaults.baseURL, {
          fields: {
            name: {
              stringValue: this.name,
            },
            comment: {
              stringValue: this.comment,
            },
            team: {
              stringValue: this.team,
            },
          },
        })
        .then(() => {
          this.name = ""
          this.comment = ""
          this.team = ""
          this.getPosts()
        })
    },
    getPosts() {
      axios.get(axios.defaults.baseURL).then((res) => {
        this.posts = res.data.documents
      })
    },
  },
}
</script>
