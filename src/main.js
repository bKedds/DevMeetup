import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	render: (h) => h(App),
}).$mount("#app");
