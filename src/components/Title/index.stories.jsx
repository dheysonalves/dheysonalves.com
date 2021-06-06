import React from 'react';
import Title from '.';

export default {
	title: 'Components/Typography/Title',
	component: Title,
	args: {
		label: 'Title',
		size: 16,
		weight: 'bold',
	},
};

export const TitleBasic = (args) => <Title {...args} />;
