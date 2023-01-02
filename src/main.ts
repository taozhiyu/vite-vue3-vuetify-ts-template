import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./plugins/router";

import "./assets/main.scss";

import vuetify from "./plugins/vuetify";

const app = createApp(App);

app.use(createPinia()).use(router).use(vuetify);

app.mount("#app");
