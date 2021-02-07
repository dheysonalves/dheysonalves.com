import React from 'react';
import Ship from './index';
import * as S from './styles';

export default {
    title: 'Components/Ships',
    component: Ship,
    argTypes: {
        label: 'React',
        radius: false,
        color: { control: 'color' },
        labelColor: { control: 'color' },
    },
};

export const BasicShip = (args) => <Ship color="yellow" {...args} />;

export const RoundedShip = (args) => (
    <Ship radius={true} color="#363636" labelColor="#fff" {...args} />
);
export const RoundedShipList = (args) => (
    <S.ShipListWrapper>
        <Ship
            radius={true}
            color="lightblue"
            labelColor="#fff"
            label="React"
            {...args}
        />
        <Ship
            radius={true}
            color="purple"
            labelColor="#fff"
            label="Gatsby"
            {...args}
        />
        <Ship
            radius={true}
            color="green"
            labelColor="#fff"
            label="Node"
            {...args}
        />
    </S.ShipListWrapper>
);

export const ShipList = (args) => (
    <S.ShipListWrapper>
        <Ship color="lightblue" labelColor="#fff" label="React" {...args} />
        <Ship color="purple" labelColor="#fff" label="Gatsby" {...args} />
        <Ship color="green" labelColor="#fff" label="Node" {...args} />
    </S.ShipListWrapper>
);
