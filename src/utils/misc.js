export const disqusConfig = ({ slug, title }) => ({
	shortname: process.env.GATSBY_DISQUS_NAME,
	config: { identifier: slug, title },
});

export const readingTime = (text) => {
	const wpm = 225;
	const words = text.trim().split(/\s+/).length;
	const time = Math.ceil(words / wpm);

	return time;
};

export const formatDate = (date) => {
	const months = [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	];
	let currentDate = new Date(date);
	const formatedDate =
		currentDate.getDate() +
		' de ' +
		months[currentDate.getMonth()] +
		', ' +
		currentDate.getFullYear();

	return formatedDate;
};
