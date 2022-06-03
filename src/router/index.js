import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import MapView from "../views/MapView.vue"
import TipsView from "../views/TipsView.vue"
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
    path: "/tips",
    name: "Tips",
    component: TipsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
