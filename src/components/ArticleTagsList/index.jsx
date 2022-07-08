import React from 'react';
import Ships from '../Ships';

const ArticleTagsList = ({ tags }) => {
	return tags.map((item, index) => {
		return (
			<Ships color={item} key={index} label={item + ' '} radius={false} />
		);
	});
};

export default ArticleTagsList;
