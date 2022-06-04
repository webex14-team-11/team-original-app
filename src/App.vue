<template>
  <div>
    <div class="nav">
      <router-link to="/" class="nav_logo">B-league</router-link>
      <router-link to="/basic-knowledge" class="nav_link"
        >Basic knowledge</router-link
      >
      <router-link to="/B.league" class="nav_link">B .LEAGUE</router-link>
      <router-link to="/map" class="nav_link">Map</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav_logo {
  font-size: 50px;
  margin: 0 60px 0 40px;
}

.nav {
  display: flex;
  padding: 30px;
  align-items: stretch;
  justify-content: space-between;
  background-color: #797979;
}

.nav a {
  font-weight: bold;
  color: white;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.nav_link {
  margin: 0 20px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
</style>
