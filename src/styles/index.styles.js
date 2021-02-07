import styled from 'styled-components';
import { rhythm } from '../utils/typography';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (max-device-width: 767px) {
        max-width: ${rhythm(100)};
        margin: 0 auto;
    }
    /* Styles */

    /* tablets (portrait) ----------- */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1223px) {
        max-width: ${rhythm(50)};
        margin: 0 auto;
    }
    /* Styles */

    /* Desktops and laptops ----------- */
    @media only screen and (min-width: 1224px) {
        max-width: ${rhythm(30)};
        margin: 0 auto;
    }

    /* Large screens ----------- */
    @media only screen and (min-width: 1824px) {
        max-width: ${rhythm(30)};
        margin: 0 auto;
    }
`;

export const Title = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    margin: 0px;

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (max-device-width: 767px) {
        font-size: 50px;
    }
    /* Styles */

    /* tablets (portrait) ----------- */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1223px) {
        font-size: 40px;
        line-height: normal;
    }
    /* Styles */

    /* Desktops and laptops ----------- */
    @media only screen and (min-width: 1224px) {
        font-size: 48px;
        line-height: normal;
    }

    /* Large screens ----------- */
    @media only screen and (min-width: 1824px) {
        font-size: 45px;
        line-height: normal;
    }
`;

export const EmphasisParagraph = styled.p`
    display: block;
    cursor: default;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const EnphasisSpan = styled.span`
    color: #ff6100;
    display: block;
    cursor: default;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
`;

export const ImageWrapper = styled.img`
    position: absolute;
    top: 150px;
    width: 350px;
`;

export const ContentCenter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    @media only screen and (max-device-width: 767px) {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

export const Avatar = styled.img`
    margin-right: 20px;

    @media only screen and (max-device-width: 767px) {
        margin-top: 50px;
        width: 50px;
        align-self: flex-start;
        display: none;
    }

    /* tablets (portrait) ----------- */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1223px) {
        display: none;
    }
    /* Styles */

    /* Desktops and laptops ----------- */
    @media only screen and (min-width: 1224px) {
        width: 250px;
    }

    /* Large screens ----------- */
    @media only screen and (min-width: 1824px) {
        width: 330px;
    }
`;

export const SmallDescription = styled.small`
    margin-top: 15px;
    cursor: default;
`;

export const Footer = styled.footer`
    max-width: ${rhythm(20)};
    margin: 0 auto;
    text-align: center;
`;

export const IconsWrapper = styled.div`
    margin-top: 10px;

    a {
        color: #ff6100;
        text-decoration: none;

        :hover {
            color: #363636;
        }

        :active {
            color: #000007;
        }
    }
    .anchor__specific {
        padding-left: 10px;
    }
`;

export const BlogPostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
`;

export const Divider = styled.div`
    border: 1px solid #363636;
    opacity: 0.2;
    width: 100%;
`;
