/**
 * make a string all lowercase and replace spaces with dashes
 * @param {string} string string to 'slug-igy'
 */
export function slugify(string) {
	return string.toLowerCase().replace(/ /g, '-');
}
