function calcAverageCalories(days) {
	if (days.length === 0) {
		return 0
	}
	let totalCalories = 0
	for (const day of days) {
		totalCalories += day.calories
	}
	const averageCalories = totalCalories / days.length
	return averageCalories
}
