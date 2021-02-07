import React from 'react';
import Input from './index';

export default {
    title: 'Components/Inputs',
    component: Input,
    argTypes: {
        color: { control: 'color' },
    },
};

const Template = (args) => <Input {...args} />;

export const RegularWhite = Template.bind({});

export const RegularDark = Template.bind({});
RegularDark.args = {
    background: '#292F36',
    color: '#ffffff',
};

export const RoundedWhite = Template.bind({});
RoundedWhite.args = {
    radius: '4px',
};
export const RoundedDark = Template.bind({});
RoundedWhite.args = {
    radius: '4px',
    background: '#292F36',
    color: '#ffffff',
};
