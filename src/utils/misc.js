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
