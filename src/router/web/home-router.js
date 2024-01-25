const HomeComponent = () => import("../../views/Home.vue");

export default {
  path: "/",
  name: "Home",
  component: HomeComponent,
  meta: { title: "Home" },
};
