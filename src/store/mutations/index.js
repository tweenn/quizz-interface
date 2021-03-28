
export default {
	name (state, value) {
		state.name = value;
	},
	email (state, value) {
		state.email = value;
	},
	legals (state, value) {
		state.legals = value;
	},
	setAnswer (state, answer) {
		state.answers[answer.id] = answer.value;

		state.answers = [...state.answers];
	}
};
