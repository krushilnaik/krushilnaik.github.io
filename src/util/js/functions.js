/**
 * make a string all lowercase and replace spaces with dashes
 * @param {string} string string to 'slug-igy'
 */
export function slugify(string) {
	return string.toLowerCase().replace(/ /g, '-');
}

/**
 * Get number of years since a certain date
 * @param {string} date - date in format MM/DD/YYYY
 */
export const calculateAge = date => {
	const birthDate = new Date(date);
	const todaysDate = new Date();

	var years = todaysDate.getFullYear() - birthDate.getFullYear();

	if (
		todaysDate.getMonth() < birthDate.getMonth() ||
		(todaysDate.getMonth() === birthDate.getMonth() && todaysDate.getDate() < birthDate.getDate())
	) {
		years--;
	}

	return years;
};
