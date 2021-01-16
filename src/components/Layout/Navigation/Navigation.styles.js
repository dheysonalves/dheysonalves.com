import styled, { keyframes } from 'styled-components';
import { rhythm, scale } from '../../../utils/typography';

export const Header = styled.header`
	margin: ${props => props.mw && '0 auto'};
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: initial;
    height: 50px;
    margin-bottom: 20px;

    @media (min-width: 1270px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 3rem 0rem 0rem;
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
    cursor: default;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 60rem;

    @media (max-width: 1279px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background: ${props => props.color || '#fff'}; */
        /* height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute; */
          /* transition: transform 0.3s ease-in-out;
        transform: ${({ open }) =>
        open ? 'translateX(0)' : 'translateX(-100%)'}; */
        top: 0;
        right: 0;
        width: 100%;
        z-index: 2;

        a {
            font-size: 1rem;
            text-transform: uppercase;
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
        margin: 0;

        a {
            font-weight: bold;
            letter-spacing: 0.2rem;
            color: ${props => props.link};
            text-decoration: none;
            transition: color 0.3s linear;
            font-size: 1.1rem;
        }

        &:active {
            text-decoration: underline;
            }
        &:hover {
            color: #57886C;
            text-decoration: underline;
            }
        &:focus {
            color: #fff;
        }
        &:visited {
            color: #fff;
        }
`;

export const CursorBulb = styled.div`
    cursor: pointer;
`;
