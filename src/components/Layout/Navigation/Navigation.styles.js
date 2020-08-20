import styled, { keyframes } from 'styled-components';
import { rhythm, scale } from '../../../utils/typography';

export const Header = styled.header``;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    position: initial;

    @media (min-width: 1270px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 3rem 0rem 0rem;
        position: absolute;
        z-index: 1;
        width: 100%;
    }
`;

export const Title = styled.h2`
    font-family: 'Merriweather', 'Georgia', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-shadow: 0px 4px 15px rgba(87, 136, 108, 0.5);
    text-transform: uppercase;
    text-decoration: underline;
    color: ${props => props.color};
    margin: 0;
    padding: 0;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 50%;

    @media (max-width: 1279px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: ${props => props.color || '#fff'};
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        right: 0;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) =>
        open ? 'translateX(0)' : 'translateX(-100%)'};
        width: 100%;

        a {
            font-size: 2rem;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: ${props => props.link || '#363636'};
            text-decoration: none;
            transition: color 0.3s linear;

        }
    }
`;

export const MenuItem = styled.li`
        display: block;
        text-transform: uppercase;
        margin: 0;

        a {
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: ${props => props.link};
            text-decoration: none;
            transition: color 0.3s linear;

        }

        &:hover {
            color: #57886C;
            text-decoration: underline;
            }
            &:active {
            color: #57886C;
            text-decoration: underline;

            }
            &:focus {
                color: #57886C;
            }
`;
