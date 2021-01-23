import React from 'react';
import Select from '.';

export default {
    title: 'Components/Select',
    component: Select,
    args: {
        fontSize: '16px',
        height: '50px',
    },
};

export const Default = (args) => <Select {...args} />;
