import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import config from "./config";
import "./utils/request";
import request from "./utils/request";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
