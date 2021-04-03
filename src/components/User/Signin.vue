<template>
	<v-container>
		<v-row class="ma-2" v-if="error">
			<v-flex xs12 sm6 offset-sm3>
				<app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
			</v-flex>
		</v-row>
		<v-card class="mx-auto mt-8" style="max-width: 500px;">
			<v-toolbar color="blue lighter-1 accent-4" cards dark flat>
				<v-card-title class="title font-weight-regular">
					Sign in
				</v-card-title>
			</v-toolbar>
			<v-form ref="form" v-model="form" class="pa-4 pt-6">
				<v-text-field
					v-model="email"
					filled
					color="blue lighter-1 accent-4"
					label="Email address"
					type="email"
					required
				></v-text-field>
				<v-text-field
					v-model="password"
					filled
					color="blue lighter-1 accent-4"
					label="Password"
					type="password"
				></v-text-field>
			</v-form>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn
					:disabled="loading"
					:loading="loading"
					type="submit"
					class="white--text"
					color="blue lighter-1 accent-4"
					depressed
					@click="onSignin"
				>
					Sign in
					<template v-slot:loader>
						<span class="custom-loader">
							<v-icon light>mdi-cached</v-icon>
						</span>
					</template>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		form: false,
		email: "",
		password: "",
	}),
	computed: {
		error() {
			return this.$store.getters.error;
		},
		loading() {
			return this.$store.getters.loading;
		},
		formIsValid() {
			return this.name !== "" && this.password !== "" && this.email !== "";
		},
		user() {
			return this.$store.getters.user;
		},
	},
	watch: {
		user(value) {
			if (value !== null && value !== undefined) {
				this.$router.push("/");
			}
		},
	},

	methods: {
		onDismissed() {
			console.log("Dismissed Alert!");
			this.$store.dispatch("clearError");
		},
		onSignin() {
			this.$store.dispatch("signUserIn", {
				email: this.email,
				password: this.password,
			});
		},
	},
};
</script>
<style>
.custom-loader {
	animation: loader 1s infinite;
	display: flex;
}
@-moz-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-webkit-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@-o-keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
@keyframes loader {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
