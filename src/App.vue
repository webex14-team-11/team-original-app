<template>
  <div>
    <div class="nav">
      <div class="logo">
        <a href="/"
          ><img src="./assets/saitologo.jpg" alt="" class="nav_logo"
        /></a>
      </div>
      <router-link to="/basic-knowledge" class="nav_link"
        >Basic Knowledge</router-link
      >
      <router-link to="/B.league" class="nav_link">B .LEAGUE</router-link>
      <router-link to="/map" class="nav_link">Map</router-link>
      <router-link to="/BBS" class="nav_link">BBS</router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <ul class="footer-menu">
      <li>Basic Knowledge ｜</li>
      <li>B .LEAGUE ｜</li>
      <li>Map</li>
    </ul>
    <p>© All rights reserved by B.LEAGUE INTRODUCTION</p>
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
  width: 200px;
  height: auto;
}

.nav {
  display: flex;
  padding: 20px;
  align-items: stretch;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 6px solid rgb(226, 223, 223);
  padding-bottom: 10px;
  margin-bottom: 25px;
}

.nav a {
  font-weight: bold;
  font-size: 25px;
  color: rgb(0, 0, 0);
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.nav_link {
  padding: 15px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.footer {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  text-align: center;
  border-top: 6px solid rgb(226, 223, 223);
}
ul.footer-menu li {
  display: inline;
}
</style>
