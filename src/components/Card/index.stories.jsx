import React from 'react';
import Card from './index';

export default {
    title: 'Components/Cards',
    component: Card,
    args: {
        title: '',
        subtitle: '',
        photo: 'https://source.unsplash.com/random/400x400',
    },
};

export const SmallCard = (args) => <Card {...args} />;

export const LargerCard = (args) => <Card width="400px" {...args} />;
