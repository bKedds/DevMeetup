import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import { store } from "./store/index";
import DateFilter from "./filters/date";
import firebase from "firebase/app";
import Alert from "./components/Shared/alert.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", Alert);

new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
	created() {
		firebase.initializeApp({
			apiKey: "AIzaSyCFyqHbsxhxs3p-Yiz0rr8lCGwaZ28V_rY",
			authDomain: "devmeetup-5c718.firebaseapp.com",
			projectId: "devmeetup-5c718",
			storageBucket: "",
		});
	},
}).$mount("#app");
