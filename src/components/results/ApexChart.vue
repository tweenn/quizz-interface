<template>
	<vueApexCharts
		type="bar"
		height="350"
		:series="chartSeries"
		:options="chartOptions"
	/>
</template>

<script>
import vueApexCharts from 'vue-apexcharts';

export default {
	components: {
		vueApexCharts
	},
	computed: {
		calculatedAnswers () {
			return this.$store.getters.calculatedAnswers;
		},
		chartSeries () {
			return [{
				name: 'Your answers',
				data: this.calculatedAnswers.map((answer) => {
					if (answer.value < 0) {
						return 0;
					}
					return answer.value;
				})
			},
			{
				name: 'Other Players',
				data: [10, 7, 5, 2]
			}
			];
		},
		chartOptions () {
			// const colors = ['#f0f', '#f00', '#00f', '#0ff'];

			return {
				chart: {
					toolbar: {
						show: false
					},
					height: 350,
					type: 'bar'
					// events: {
					// 	click: function (chart, w, e) {
					// 		// console.log(chart, w, e)
					// 	}
					// }
				},
				// colors: colors,
				plotOptions: {
					bar: {
						columnWidth: '35%',
						distributed: false
					}
				},
				dataLabels: {
					enabled: true
				},
				stroke: {
					show: true,
					width: 2,
					colors: ['transparent']
				},
				legend: {
					show: true
				},
				xaxis: {
					categories: this.calculatedAnswers.map((answer) => {
						return answer.information.title;
					}),
					labels: {
						style: {
							fontSize: '14px'
						}
					}
				},
				fill: {
					opacity: 1
				}
			};
		}
	}
};
</script>
