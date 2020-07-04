import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${rhythm(2.5)};
`;

export const Paragraph = styled.p`
    font-weight: bold;
    font-size: 36px;
    line-height: 54px;
    text-transform: uppercase;
`;
