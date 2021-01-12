import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bio from "../views/Bio.vue";
import Projects from "../views/Projects.vue";
import Experience from "../views/Experience.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: Bio
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience
  }
];

const router = new VueRouter({
  mode: "history",
  base: "",
  routes
});

export default router;
