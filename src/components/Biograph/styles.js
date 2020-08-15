import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2)};
    text-align: center;
`;

export const Title = styled.h2`
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
`;

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #FFFFFF;
    margin-top: 20px;

`;
