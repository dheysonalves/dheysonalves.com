import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
    justify-content: space-between;
    overflow: auto;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const InfoWrapper = styled.div`
    margin-left: 15px;
    margin-right: 15px;
`;

export const Image = styled.img`
    margin-bottom: 0px;
`;
