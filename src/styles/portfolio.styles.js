import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
    justify-content: space-between;
    overflow: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;
