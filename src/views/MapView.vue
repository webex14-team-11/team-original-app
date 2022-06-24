<template>
  <div class="map">
    <div>
      <google-map :zoom="4" />
    </div>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue"

export default {
  name: "App",
  components: {
    GoogleMap,
  },
}
</script>
