<template>
	<v-container class="quizz py-8">
		<v-row justify="center">
			<v-col xs="12" sm="8">
				<quizzCard
					v-for="(question, questionIndex) in questions"
					:key="questionIndex"
					:quizzDataIndex="questionIndex"
					:quizzData="question"
					:nextQuestion="nextQuestion"
					:isActive="questionIndex === currentQuestion"
					:isLast="questionIndex === (questions.length - 1)"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import quizzCard from '@/components/quizz/QuizzCard.vue';

export default {
	components: {
		quizzCard
	},
	data () {
		return {
			currentQuestion: 0
		};
	},
	computed: {
		questions () {
			return this.$store.getters.questions;
		}
	},
	methods: {
		nextQuestion (questionIndex) {
			if (this.currentQuestion + 1 >= this.questions.length) {
				this.$router.push({ name: 'Results' });
			} else {
				this.currentQuestion++;
			}
		}
	}
};
</script>
