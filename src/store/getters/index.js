
export default {
	userName (state) {
		return state.name;
	},
	questions (state) {
		return state.questions;
	},
	calculatedAnswers (state) {
		const answers = [...state.answers];
		const questions = [...state.questions];
		const typeTitles = { ...state.types };
		const processedPoints = {};

		answers.map((answeredIndex, questionIndex) => {
			const points = { ...questions[questionIndex].answers[answeredIndex].points };
			Object.keys(points).map((pointsKey) => {
				processedPoints[pointsKey] = processedPoints[pointsKey] || {
					id: pointsKey,
					information: typeTitles[pointsKey] || 'Type with no name',
					value: 0
				};
				processedPoints[pointsKey].value += points[pointsKey];
			});
		});

		return Object.keys(processedPoints).map((pointKey) => {
			return processedPoints[pointKey];
		});
	}
};
