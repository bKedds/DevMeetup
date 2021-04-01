<template>
	<v-container>
		<v-row wrap>
			<v-col xs12 sm6 class="text-center text-sm-right mt-2">
				<v-btn large router to="/meetups" dark class="info"
					>Explore Meetups</v-btn
				>
			</v-col>
			<v-col xs12 sm6 class="text-center text-sm-left mt-2">
				<v-btn large router to="/meetup/new" dark class="info"
					>Organize Meetup</v-btn
				>
			</v-col>
		</v-row>
		<v-row>
			<v-col xs12 sm6>
				<v-card elevation="24" width="999" class="mx-auto">
					<v-carousel style="cursor:pointer">
						<v-carousel-item
							v-for="meetup in meetups"
							:src="meetup.imageUrl"
							:key="meetup.id"
							transition="fade-transition"
							reverse-transition="fade-transition"
							@click="onLoadMeetup(meetup.id)"
						>
							<v-row align="end" justify="center">
								<div class="title mb-2">{{ meetup.title }}</div>
							</v-row>
						</v-carousel-item>
					</v-carousel>
				</v-card>
			</v-col>
		</v-row>
		<v-row wrap>
			<v-col xs12 class="text-center text-sm-center mt-2">
				<p>Join our awesome meetups!</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
	methods: {
		onLoadMeetup(id) {
			this.$router.push("/meetups/" + id);
		},
	},
};
</script>

<style scoped>
.title {
	background-color: rgba(0, 0, 0, 0.5);
	padding: 20px;
	position: absolute;
	bottom: 50px;
	color: white;
	font-size: 2em;
	text-align: center;
}
</style>
