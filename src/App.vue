<template>
	<v-app>
		<v-main>
			<v-navigation-drawer v-model="drawer" absolute temporary>
				<v-list dense>
					<v-list-item
						v-for="item in menuItems"
						:key="item.title"
						router
						:to="item.link"
					>
						<v-list-item-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>{{ item.title }}</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
			<v-toolbar dark class="red darken-1">
				<v-app-bar-nav-icon
					@click.stop="drawer = !drawer"
					class="hidden-sm-and-up"
				></v-app-bar-nav-icon>
				<v-toolbar-title
					><router-link to="/" tag="span" style="cursor:pointer"
						>DevMeetup</router-link
					></v-toolbar-title
				>

				<v-spacer></v-spacer>
				<v-toolbar-items class="hidden-xs-only">
					<v-btn
						text
						v-for="item in menuItems"
						:key="item.tile"
						router
						:to="item.link"
					>
						<v-icon left dark>{{ item.icon }}</v-icon>
						{{ item.title }}
					</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: false,
		menuItems: [
			{ icon: "supervisor_account", title: "View Meetups", link: "/meetups" },
			{ icon: "room", title: "Organize Meetup", link: "/meetup/new" },
			{ icon: "person", title: "Profile", link: "/profile" },
			{ icon: "face", title: "Sign up", link: "/signup" },
			{ icon: "lock_open", title: "Sign in", link: "/signin" },
		],
	}),
};
</script>
