<template>
	<v-container class="results py-8">
		<v-row justify="center">
			<v-col xs="12" sm="8">
				<resultsCard />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import resultsCard from '@/components/results/ResultsCard.vue';

export default {
	components: {
		resultsCard
	}
};
</script>
