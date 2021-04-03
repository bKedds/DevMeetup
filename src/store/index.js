import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{
				imageUrl:
					"https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/Canada/Vancouver/vancouver-destination-guide.jpg",
				id: "asdfasdfasd",
				title: "Meetup in Vancouver",
				date: new Date(),
				location: "New York",
				description: "new york",
			},
			{
				imageUrl:
					"https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
				id: "asdfasdg",
				title: "Meetup in Paris",
				date: new Date(),
				location: "Paris",
				description: "Paris",
			},
		],
		user: null,
		loading: false,
		error: null,
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
		},
		createMeetup(state, payload) {
			state.loadedMeetups.push(payload);
		},
		setLoading(state, payload) {
			state.loading = payload;
		},
		setError(state, payload) {
			state.error = payload;
		},
		clearError(state) {
			state.error = null;
		},
	},
	actions: {
		signUserUp({ commit }, payload) {
			commit("setLoading", true);
			commit("clearError");
			firebase
				.auth()
				.createUserWithEmailAndPassword(payload.email, payload.password)
				.then((user) => {
					commit("setLoading", false);
					const newUser = {
						id: user.uid,
						registeredMeetups: [],
					};
					commit("setUser", newUser);
				})
				.catch((error) => {
					commit("setLoading", false);
					commit("setError", error);
					console.log(error);
				});
		},
		signUserIn({ commit }, payload) {
			commit("setLoading", true);
			commit("clearError");
			firebase
				.auth()
				.signInWithEmailAndPassword(payload.email, payload.password)
				.then((user) => {
					commit("setLoading", false);
					const newUser = {
						id: user.uid,
						registeredMeetups: [],
					};
					commit("setUser", newUser);
				})
				.catch((error) => {
					commit("setLoading", false);
					commit("setError", error);
					console.log(error);
				});
		},
		createMeetup({ commit }, payload) {
			const meetup = {
				title: payload.title,
				location: payload.location,
				imageUrl: payload.imageUrl,
				description: payload.description,
				date: payload.date,
				id: "asdfasdfdg",
			};
			// Reach out to firebase and store it
			commit("createMeetup", meetup);
		},
		clearError({ commit }) {
			commit("clearError");
		},
	},
	getters: {
		error(state) {
			return state.error;
		},
		loading(state) {
			return state.loading;
		},
		user(state) {
			return state.user;
		},
		loadedMeetups(state) {
			return state.loadedMeetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date;
			});
		},
		featuredMeetups(state, getters) {
			return getters.loadedMeetups.slice(0, 5);
		},
		loadedMeetup(state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id == meetupId;
				});
			};
		},
	},
});
