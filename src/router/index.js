import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import MapView from "../views/MapView.vue"
import BLeague from "../views/BleagueView.vue"
import BasicKnowledge from "../views/BasicKnowledge.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Map",
    name: "map",
    component: MapView,
  },
  {
    path: "/B.league",
    name: "BLeague",
    component: BLeague,
  },
  {
    path: "/basic-knowledge",
    name: "basic-knowledge",
    component: BasicKnowledge,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
