import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.ts";
import 'vuetify/styles'
import { createVuetify } from "vuetify";
import { VBtn, VCard, VTextField, VForm } from "vuetify/components";

const vuetify = createVuetify({
  components: { VBtn, VCard, VTextField, VForm },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
