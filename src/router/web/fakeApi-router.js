// * LAZY LOADING ROUTE COMPONENT
//? ganti import FakeApi from "../../views/FakeApi.vue";
// ? menggunakan import component module, akan memanggil file vue walaupun tidak sedang berada di route.
//? menjadi function import, supaya component akan diload ketika berada dalam route.

const fakeAPIViews = () => import("../../views/FakeApi.vue");

export default {
  path: "/fake-api",
  component: fakeAPIViews,
  name: "FakeAPI",
  meta: {
    title: "Fake API",
  },
};
