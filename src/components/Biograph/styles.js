import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${rhythm(3)};
    margin-bottom: ${rhythm(2)};
    text-align: center;
`;

export const Title = styled.h2`
    font-weight: bold;
    text-transform: uppercase;
    padding: 0;
    margin: 0;

      /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (max-device-width : 767px) {
        font-size: 34px;
        line-height: 54px;
    }
    /* Styles */

    /* tablets (portrait) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1223px) {
        font-size: 40px;
        line-height: normal;
    }
    /* Styles */

    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 1224px) {
        font-size: 40px;
        line-height: normal;
    }

    /* Large screens ----------- */
    @media only screen  and (min-width : 1824px) {
        font-size: 40px;
        line-height: normal;
    }
`;

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: normal;
    margin-top: 20px;

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (max-device-width : 767px) {
        font-size: 16px;
        line-height: 30px;
    }
    /* Styles */

    /* tablets (portrait) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1223px) {
        font-size: 18px;
        line-height: normal;

    }
    /* Styles */

    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 1224px) {
        font-size: 18px;
        line-height: normal;

    }

    /* Large screens ----------- */
    @media only screen  and (min-width : 1824px) {
        font-size: 20px;
        line-height: normal;
    }

`;
