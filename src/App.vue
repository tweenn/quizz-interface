<template>
	<v-app>
		<appBar />
		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>
import AppBar from './components/app-bar/AppBar';

export default {
	name: 'App',

	components: {
		AppBar
	}
};
</script>
