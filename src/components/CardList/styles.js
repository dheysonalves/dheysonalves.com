import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: auto;
    grid-auto-flow: dense;
    gap: 20px;
`;

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
`;

export const PaginationTitle = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
`;

export const PaginationActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PaginationAction = styled.button`
    text-align: center;
    font-size: 18px;
    outline: none;
    background-color: transparent;
    padding: 10px;
    color: #fff;
    border: 0px;
    cursor: pointer;

    &:hover {
        color: #aeffd8;
        font-size: 22px;
        transition: ease-in;
        text-decoration: underline;
        border: 1px solid #fff;
    }

    &:active {
        color: #aeffd8;
        font-size: 22px;
        transition: ease-in;
        text-decoration: underline;
        border: 1px solid #fff;
    }

    &:focus {
        color: #aeffd8;
        font-size: 22px;
        transition: ease-in;
        text-decoration: underline;
        border: 1px solid #fff;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 100px;
    color: #000;
`;
