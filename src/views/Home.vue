<template>
	<v-container class="home py-8">
		<v-row justify="center">
			<v-col xs="12" sm="8">
				<HomeCard />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import HomeCard from '@/components/home/Home.vue';

export default {
	name: 'Home',
	components: {
		HomeCard
	}
};
</script>
