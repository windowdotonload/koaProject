import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import config from "./config";
import request from "./utils/request";
import storage from "./utils/storage";
import router from "./router";
import i18n from "./locale/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
app.use(ElementPlus);
app.use(router);
app.use(i18n);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
