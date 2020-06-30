import styled from 'styled-components';

export const Navigation = styled.nav``;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    overflow: hidden;
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
