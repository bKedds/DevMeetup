import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{
				imageUrl:
					"https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/Canada/Vancouver/vancouver-destination-guide.jpg",
				id: "asdfasdfasd",
				title: "Meetup in Vancouver",
				date: "2021-07-17",
			},
			{
				imageUrl:
					"https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
				id: "asdfasdg",
				title: "Meetup in Paris",
				date: "2021-07-19",
			},
		],
		user: {
			id: "12ewef",
			registeredMeetups: ["asdfasdgsad"],
		},
	},
	mutations: {},
	actions: {},
	getters: {
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
