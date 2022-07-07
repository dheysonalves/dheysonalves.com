import React from 'react';

import ArticleCard from './ArticleCard';

const ArticleList = ({ posts }) => {
	return posts.map(({ node }) => {
		const title = node.frontmatter.title || node.fields.slug;
		const { tags, date, description } = node.frontmatter;

		return (
			<ArticleCard
				key={node.fields.slug}
				title={title}
				tags={tags}
				date={date}
				description={description}
				slug={node.fields.slug}
				excerpt={node.excerpt}
			/>
		);
	});
};

export default ArticleList;
