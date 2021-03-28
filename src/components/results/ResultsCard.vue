<template>
	<v-card>
		<v-img
			:src="userTypeData.image"
		/>
		<v-divider />

		<v-card-title>
			<p class="ma-0">
				<strong>{{ userTypeData.title }}</strong> type!
			</p>
		</v-card-title>

		<v-card-text>
			<p class="ma-0">
				<strong>Congratulations {{userName}}</strong>!
				<br />
				<br />
				{{ userTypeData.description }}
			</p>
		</v-card-text>

		<v-divider class="mb-8 mt-4" />

		<apexCharts />
	</v-card>
</template>

<script>
import apexCharts from './ApexChart.vue';

export default {
	components: {
		apexCharts
	},
	computed: {
		userName () {
			return this.$store.getters.userName;
		},
		userTypeData () {
			return this.calculatedAnswers.map((answer) => {
				return {
					image: answer.information.image,
					title: answer.information.title,
					description: answer.information.description,
					value: answer.value
				};
			}).sort((a, b) => {
				return a.value - b.value;
			}).reverse()[0];
		},
		calculatedAnswers () {
			return this.$store.getters.calculatedAnswers;
		}
	}
};
</script>
