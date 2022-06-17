<template>
  <h1>Google Map</h1>
  <div ref="map" style="height: 800px; width: 1000px"></div>
</template>

<script>
export default {
  props: {
    zoom: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      start: { lat: 36.15295082154122, lng: 139.36590868766348 },
      teams: [
        {
          name: "レバンガ北海道",
          lat: 43.04448322003793,
          lng: 141.3769812394483,
          area: "east",
        },
        {
          name: "秋田ノーザンハピネッツ",
          lat: 39.72602404652841,
          lng: 140.08776054232789,
          area: "east",
        },
        {
          name: "茨城ロボッツ",
          lat: 36.380980275374775,
          lng: 140.44780454232787,
          area: "east",
        },
        {
          name: "宇都宮ブレックス",
          lat: 36.561189941053875,
          lng: 139.9107246269836,
          area: "east",
        },
        {
          name: "群馬クレインサンダース",
          lat: 36.27539839050187,
          lng: 139.39382416931156,
          area: "east",
          URL: "https://g-crane-thunders.jp/",
        },
        {
          name: "千葉ジェッツ",
          lat: 35.729472256952754,
          lng: 140.05198583068844,
          area: "east",
          URL: "https://chibajets.jp/",
        },
        {
          name: "アルバルク東京",
          lat: 35.66771072993226,
          lng: 139.70018445767212,
          area: "east",
          URL: "https://www.alvark-tokyo.jp/",
        },
        {
          name: "サンロッカーズ渋谷",
          lat: 35.6613377354985,
          lng: 139.711362,
          area: "east",
          URL: "https://www.hitachi-sunrockers.co.jp/",
        },
        {
          name: "川崎ブレイブサンダース",
          lat: 35.58733435004711,
          lng: 139.64735454232786,
          area: "east",
          URL: "https://kawasaki-bravethunders.com/",
        },
        {
          name: "横浜ビー・コルセアーズ",
          lat: 35.56413462456933,
          lng: 139.59456708731085,
          area: "east",
          URL: "https://b-corsairs.com/",
        },
        {
          name: "新潟アルビレックスBB",
          lat: 37.44666117839158,
          lng: 138.8512050846558,
          URL: "https://www.albirex.com/",
          area: "east",
        },
        {
          name: "富山グラウジーズ",
          lat: 36.70680020271838,
          lng: 137.21400154232785,
          URL: "https://grouses.jp/",
          area: "west",
        },
        {
          name: "信州ブレイブウォリアーズ",
          lat: 36.60472545108493,
          lng: 138.20629700000003,
          URL: "https://www.b-warriors.net/",
          area: "west",
        },
        {
          name: "三遠ネオフェニックス",
          lat: 34.75879077258872,
          lng: 137.32309954232784,
          URL: "https://www.neophoenix.jp/",
          area: "west",
        },
        {
          name: "シーホース三河",
          lat: 35.01966243729367,
          lng: 137.01061608465577,
          URL: "https://go-seahorses.jp/",
          area: "west",
        },
        {
          name: "名古屋ダイヤモンドドルフィンズ",
          lat: 35.18319976366378,
          lng: 136.90262137301636,
          URL: "https://nagoya-dolphins.jp/",
          area: "west",
        },
        {
          name: "滋賀レイクスターズ",
          lat: 35.00513033615729,
          lng: 135.88742954232785,
          URL: "https://www.lakestars.net/",
          area: "west",
        },
        {
          name: "京都ハンナリーズ",
          lat: 34.99568735847023,
          lng: 135.71501299999997,
          URL: "https://hannaryz.jp/",
          area: "west",
        },
        {
          name: "大阪エヴェッサ",
          lat: 34.66587108034915,
          lng: 135.39757116931153,
          URL: "https://www.evessa.com/",
          area: "west",
        },
        {
          name: "島根スサノオマジック",
          lat: 35.47145680195235,
          lng: 133.06594508465577,
          URL: "https://www.susanoo-m.com/",
          area: "west",
        },
        {
          name: "広島ドラゴンフライズ",
          lat: 34.37095066780124,
          lng: 132.394549,
          URL: "https://hiroshimadragonflies.com/",
          area: "west",
        },
        {
          name: "琉球ゴールデンキングス",
          lat: 26.333085617206354,
          lng: 127.78319008465576,
          URL: "https://goldenkings.jp/",
          area: "west",
        },
      ],
    }
  },
  mounted() {
    if (!window.mapLoadStarted) {
      window.mapLoadStarted = true
      let script = document.createElement("script")
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=" +
        process.env.VUE_APP_API_KEY +
        "&callback=initMap"
      script.async = true
      document.head.appendChild(script)
    }

    window.initMap = () => {
      window.mapLoaded = true
    }
    let timer = setInterval(() => {
      if (window.mapLoaded) {
        clearInterval(timer)
        const map = new window.google.maps.Map(this.$refs.map, {
          center: this.start,
          zoom: 6,
        })
        for (let i = 0; i < this.teams.length; i++) {
          let A = new window.google.maps.Marker({
            position: { lat: this.teams[i].lat, lng: this.teams[i].lng },
            map,
          })
          window.google.maps.event.addListener(A, "click", function () {
            console.log("aaaa")
          })
        }

        /*const Robots = new window.google.maps.Marker({
          position: this.robots,
          map,
        })
        window.google.maps.event.addListener(Robots, "click", function () {
          console.log("aaaa")
        })
        */
      }
    }, 500)
  },
}
</script>
