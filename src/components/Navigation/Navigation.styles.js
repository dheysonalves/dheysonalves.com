import styled from 'styled-components';

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.header``;

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #fff;
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 0;
        right: 0;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};;
        width: 100%;

        a {
            font-size: 2rem;
            text-transform: uppercase;
            padding: 2rem 0;
            font-weight: bold;
            letter-spacing: 0.5rem;
            color: #363636;
            text-decoration: none;
            transition: color 0.3s linear;

            &:hover {
                color: #ff6100;
            }
        }
    }
`;

export const MenuItem = styled.li`
    margin-left: 10px;

    a {
        display: block;
        padding: 10px;
    }
`;
