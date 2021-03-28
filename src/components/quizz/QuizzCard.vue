<template>
	<transition
		enter-active-class="animate__animated animate__fadeInRight animate__delay-1s animate__faster"
		leave-active-class="animate__animated animate__fadeOutLeft animate__fast"
	>
		<v-card v-if="isActive">
			<v-card-title>
				{{ quizzData.text }}
			</v-card-title>

			<v-divider />

			<v-list shaped>
				<v-list-item-group
					v-model="selectedItem"
					color="primary"
				>
					<v-list-item
						v-for="(answer, anwerIndex) in quizzData.answers"
						:key="parseInt(anwerIndex)"
					>
						<v-list-item-action>
							<v-checkbox :input-value="parseInt(anwerIndex) === parseInt(selectedItem)"></v-checkbox>
						</v-list-item-action>

						<v-list-item-content>
							<v-list-item-title>
								{{ answer.text }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>

			<v-divider />

			<v-card-actions class="d-flex flex-row-reverse">
				<v-btn
					color="success"
					@click="nextQuestion(quizzDataIndex)"
					:disabled="isNextDisabled"
				>
					{{ nextButtonTitle }}
				</v-btn>
			</v-card-actions>

		</v-card>
	</transition>
</template>

<script>
export default {
	props: {
		isActive: {
			type: Boolean,
			default: false
		},
		isLast: {
			type: Boolean,
			default: false
		},
		quizzDataIndex: {
			type: Number,
			default: 0
		},
		quizzData: {
			type: Object,
			default: () => {
				return {
					text: 'Question',
					answers: []
				};
			}
		},
		nextQuestion: {
			type: Function,
			default: () => { console.error('No function passed to QuizzCard'); }
		}
	},
	computed: {
		selectedItem: {
			get () {
				return this.$store.state.answers[this.quizzDataIndex];
			},
			set (value) {
				this.$store.commit('setAnswer', {
					id: this.quizzDataIndex,
					value: value
				});
			}
		},
		nextButtonTitle () {
			if (this.isLast) {
				return 'Finish';
			}
			return 'Next Question';
		},
		isNextDisabled () {
			if (this.selectedItem >= 0) {
				return false;
			}
			return true;
		}
	}
};
</script>
