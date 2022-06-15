<template>
  <div>
    <h1>掲示板</h1>
    名前
    <div>
      <input type="text" v-model="name" />
    </div>
    推しチーム
    <select v-model="team">
      <option disabled value="initial">Please Select</option>
      <option value="0">北海道：レバンガ北海道</option>
      <option value="1">秋田：秋田ノーザンハピネッツ</option>
      <option value="2">新潟：新潟アルビレックスBB</option>
      <option value="3">群馬：群馬クレインサンダーズ</option>
      <option value="4">栃木：宇都宮ブレックス</option>
      <option value="5">茨城：茨城ロボッツ</option>
      <option value="6">東京：アルバルク東京</option>
      <option value="7">東京：サンロッカーズ渋谷</option>
      <option value="8">東京：川崎ブレイブサンダー</option>
      <option value="9">神奈川：横浜ビー・コルセアーズ</option>
      <option value="10">千葉：千葉ジェッツ</option>
      <option value="11">富山：富山グラウジーズ</option>
      <option value="12">長野：信州ブレイブウォリアーズ</option>
      <option value="13">愛知：三遠ネオフェニックス</option>
      <option value="14">愛知：名古屋ダイアモンドドルフィンズ</option>
      <option value="15">愛知：シーホース三河</option>
      <option value="16">滋賀：滋賀レイクスターズ</option>
      <option value="17">京都：京都ハンナリーズ</option>
      <option value="18">大阪：大阪エヴォッサ</option>
      <option value="19">島根：島根スサノオマジック</option>
      <option value="20">広島：広島ドラゴンフライズ</option>
      <option value="21">沖縄：琉球ゴールデンキングス</option>
    </select>
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
      <hr />
      <p>名前：{{ post.fields.name.stringValue }}</p>
      <p>推しチーム：{{ post.fields.team.stringValue }}</p>
      <p>コメント：{{ post.fields.comment.stringValue }}</p>
    </div>
  </div>
</template>

<script>
axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/team11-41843/databases/(default)/documents/comments"

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
