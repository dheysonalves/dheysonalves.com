import React from 'react';
import Subtitle from '.';

export default {
	title: 'Components/Typography/Subtitle',
	component: Subtitle,
	args: {
		label: 'Subtitle',
		size: 16,
		weight: 'bold',
	},
};

export const SubtitleBasic = (args) => <Subtitle {...args} />;
