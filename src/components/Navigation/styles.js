import styled from 'styled-components';

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.header`
`;

export const Menu = styled.ul`
	display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

export const MenuItem = styled.li`
	margin-left: 10px;

	a {
        display: block;
        padding: 10px;
    }
`;
