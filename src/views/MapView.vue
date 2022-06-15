<template>
  <div class="map">
    <h1>This is map page</h1>
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
