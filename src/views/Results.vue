<template>
	<v-container class="results py-8">
		<v-row justify="center">
			<v-col xs="12" sm="8">
				{{ calculatedAnswers }}
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	computed: {
		calculatedAnswers () {
			return this.$store.getters.calculatedAnswers;
		}
	}
};
</script>
