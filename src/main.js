import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";

const VueApp = createApp(App);

VueApp.use(router);
VueApp.mount("#app");
