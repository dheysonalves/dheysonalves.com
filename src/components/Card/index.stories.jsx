import React from 'react';
import Card from './index';

export default {
    title: 'Components/Cards',
    component: Card,
    args: {
        title: '',
        subtitle: '',
        description: '',
        photo: 'https://source.unsplash.com/random/400x400',
    },
};

export const Default = (args) => <Card {...args} />;
