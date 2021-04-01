<template>
	<v-container mt-2>
		<v-row wrap>
			<v-flex
				xs12
				sm10
				md8
				offset-sm1
				offset-md2
				v-for="meetup in meetups"
				:key="meetup.id"
				mb-2
			>
				<v-card dark class="info">
					<v-container fluid mx-2>
						<v-row>
							<v-flex xs5 sm4 md3 mt-2>
								<v-img :src="meetup.imageUrl" height="130px"></v-img>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title title>
									<div>
										<div>{{ meetup.title }}</div>
										<h5>{{ meetup.date }}</h5>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn flat :to="'/meetups/' + meetup.id">
										<v-icon left>arrow_forward</v-icon>
										View Meetup</v-btn
									>
								</v-card-actions>
							</v-flex>
						</v-row>
					</v-container>
				</v-card>
			</v-flex>
		</v-row>
	</v-container>
</template>

<script>
export default {
	computed: {
		meetups() {
			return this.$store.getters.loadedMeetups;
		},
	},
};
</script>
