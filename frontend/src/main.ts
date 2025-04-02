import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.ts";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VBtn, VCard, VTextField, VForm, VAlert } from "vuetify/components";
import { setupStore } from "./store";
const vuetify = createVuetify({
  components: { VBtn, VCard, VTextField, VForm, VAlert },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
setupStore(app);
app.mount("#app");
