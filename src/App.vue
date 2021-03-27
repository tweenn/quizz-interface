<template>
	<v-app>
		<appBar />
		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>
import AppBar from './components/AppBar';

export default {
	name: 'App',

	components: {
		AppBar
	}
};
</script>
