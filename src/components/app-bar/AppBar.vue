<template>
	<v-app-bar
		app
		color="primary"
		dark
	>
		<div class="d-flex align-center">
			<v-img
				alt="Vuetify Logo"
				class="shrink mr-6"
				contain
				src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
				transition="scale-transition"
				width="30"
			/>
			<p class="ma-0 title">
				A Quizz powered by Vue.js and Vuetify
			</p>
		</div>

		<v-spacer />

		<v-btn
			href="https://github.com/tweenn/quizz-interface"
			target="_blank"
			text
		>
			<span class="mr-2">Latest Release</span>
			<v-icon>fab fa-github</v-icon>
		</v-btn>
	</v-app-bar>
</template>
