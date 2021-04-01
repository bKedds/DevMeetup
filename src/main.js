import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import { store } from "./store/index";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
