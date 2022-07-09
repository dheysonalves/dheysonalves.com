import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 4rem;

	@media only screen and (max-device-width: 767px) {
		margin-top: 1rem;
	}
`;

export const Title = styled.p`
	cursor: default;
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.1em;
`;

export const Subtitle = styled.h1`
	font-style: normal;
	font-weight: 600;
	margin: 0;
	color: #ff6100;
	cursor: default;

	@media only screen and (max-device-width: 767px) {
		font-size: 2rem;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1223px) {
		font-size: 2.5rem;
		line-height: normal;
	}

	@media only screen and (min-width: 1224px) {
		font-size: 3rem;
		line-height: normal;
	}

	@media only screen and (min-width: 1824px) {
		font-size: 3rem;
		line-height: normal;
	}
`;

export const BottomSpan = styled.span`
	font-size: 1rem;
	font-weight: 500;
	text-transform: uppercase;
	cursor: default;
`;

export const Avatar = styled.img`
	margin-right: 20px;
	cursor: default;
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
