import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: ${(props) => props.margin + 'px'};
`;

export const IconsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

export const IconLink = styled.a`
    padding-right: 10px;
`;

export const ShipsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;
