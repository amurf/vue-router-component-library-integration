import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import UI from "ui";

const app = createApp(App);

app.use(UI);
app.use(router);

app.mount("#app");
