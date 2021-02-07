import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

import Image from '../Image/index';
import Title from '../Title/index';
import Subtitle from '../Subtitle/index';
import Ships from '../Ships/index';

import { AiFillGithub, AiFillEye } from 'react-icons/ai';

const Card = ({ margin, width, ...data }) => {
    const { title, subtitle, github, linkedin, photo } = data;
    return (
        <S.Wrapper margin={margin} width={width}>
            <Image source={photo} alt="random image" />
            <S.DescriptionWrapper>
                <Title>{title}</Title>
                <S.ShipsWrapper>
                    <Ships label="React" color="#00C2FF" labelColor="#292F36" />
                    <Ships
                        label="Javascript"
                        color="#EBFF00"
                        labelColor="#292F36"
                    />
                    <Ships
                        label="Nodejs"
                        color="#00FF0A"
                        labelColor="#292F36"
                    />
                </S.ShipsWrapper>
                <Subtitle align="none">{subtitle}</Subtitle>
                <S.IconsWrapper>
                    <S.IconLink href={github}>
                        <AiFillGithub size={24} />
                    </S.IconLink>
                    <S.IconLink href={linkedin}>
                        <AiFillEye size={24} />
                    </S.IconLink>
                </S.IconsWrapper>
            </S.DescriptionWrapper>
        </S.Wrapper>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        github: PropTypes.string,
        linkedin: PropTypes.string,
    }),
};

Card.defaultProps = {
    photo: 'https://source.unsplash.com/random/400x400',
    title: 'Portfolio',
    subtitle:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus architecto voluptas dicta laborum optio blanditiis at dolores nobis quasi cum vel labore, voluptates enim asperiores, quis nemo facere. Aspernatur, amet!',
    github: 'https://github.com/Dheyson',
    linkedin: 'https://www.linkedin.com/in/dheysonalvess/',
};

export default Card;
