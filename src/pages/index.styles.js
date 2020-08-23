import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 100vh;
`;

export const Title = styled.h1`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;

	    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (max-device-width : 767px) {
    	font-size: 50px;
        line-height: 60px;
    }
    /* Styles */

    /* tablets (portrait) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1223px) {
        font-size: 50px;
        line-height: normal;
    }
    /* Styles */

    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 1224px) {
        font-size: 60px;
        line-height: normal;
    }

    /* Large screens ----------- */
    @media only screen  and (min-width : 1824px) {
        font-size: 60px;
        line-height: normal;
    }
`;

export const EnphasisText = styled.span`
	color:#ff6100;
	text-decoration: underline;
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
