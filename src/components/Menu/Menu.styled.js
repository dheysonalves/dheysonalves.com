import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    li {
        margin-left: 10px;
    }

    li a {
        display: block;
        padding: 10px;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: gray;
    }

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
