const getTotalWorkingExperience = () => {
	const startDate = new Date('2023-02-01');
	const currentDate = new Date();
	// @ts-ignore
	const timeDifference = currentDate - startDate;
	const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
	const totalYears = timeDifference / millisecondsInYear;
	const formattedTotalYears = totalYears.toFixed(2);

	return formattedTotalYears;
};

export default getTotalWorkingExperience;
