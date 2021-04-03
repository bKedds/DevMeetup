<template>
	<v-container>
		<v-row justify="center">
			<v-flex xs12 sm8 mt-4>
				<h1 class="secondary--text">Create a new Meetup</h1>
			</v-flex>
		</v-row>
		<v-row justify="center">
			<v-flex xs12 sm8>
				<v-form ref="form" @submit.prevent='onCreateMeetup' lazy-validation>
					<v-text-field
          name:='title'
						v-model="title"
						:rules="titleRules"
						label="Title"
						required
					></v-text-field>

					<v-text-field
          name:='location'
						v-model="location"
						:rules="locationRules"
						label="Location"
						required
					></v-text-field>

					<v-text-field
          name:='imageUrl'
						v-model="imageUrl"
						:rules="imageUrlRules"
						label="ImageUrl"
						required
					></v-text-field>
          <v-row justify="center">
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-row>
					<v-textarea
          name:='description'
          v-model='description'
						:rules="descriptionRules"
						label="Description"
					></v-textarea>

          <v-row justify="center" class='ma-2 secondary--text'>

            <h4  >Choose a Date & Time</h4>

          </v-row>
          <v-row xs12 justify="center">
          <v-date-picker
      v-model="date"
      elevation="15"
      header-color="info"
      required
      class='ma-4'
    ></v-date-picker>
    <v-time-picker v-model='time'
    format="24hr"
    elevation="15" 
    header-color="info"
    class='ma-4'
    required
    >
    </v-time-picker>

    </v-row>
    <v-row xs12 justify="center">
    <v-btn :disabled="!formIsValid"
		color="success"
		class="mt-3 mb-3"
		@click="validate"
    type='submit'>
						Create
					</v-btn>
					</v-row>	
				</v-form>
			</v-flex>
		</v-row>
	</v-container>
</template>

<script>
export default {
  data: () => ({
    title: "",
    location: "",
    imageUrl: "",
    description: "",
    datePicker: "",
    date: "",
    time: "",
    titleRules: [(v) => !!v || "Title is required"],
    locationRules: [(v) => !!v || "Location is required"],
    imageUrlRules: [(v) => !!v || "Image is required"],
    descriptionRules: [(v) => !!v || "Description is required"],
  }),

  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submitDateTime
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submitDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }

      return date;
    },
  },
};
</script>
