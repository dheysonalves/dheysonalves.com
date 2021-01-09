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
    line-height: 60px;
  }
  /* Styles */

  /* tablets (portrait) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1223px) {
    font-size: 50px;
    line-height: normal;
  }
  /* Styles */

  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    font-size: 60px;
    line-height: normal;
  }

  /* Large screens ----------- */
  @media only screen and (min-width: 1824px) {
    font-size: 60px;
    line-height: normal;
  }
`;

export const EnphasisText = styled.span`
  color: #ff6100;
  text-decoration: underline;
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

  @media only screen and (max-device-width: 767px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  margin-right: 20px;

  @media only screen and (max-device-width: 767px) {
    margin-top: 30px;
    width: 200px;
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
    width: 400px;
  }
`;

export const SmallDescription = styled.small`
  margin-top: 15px;
  cursor: default;
`;
