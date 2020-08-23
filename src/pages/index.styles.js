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
	font-size: 40px;
	line-height: 60px;
	z-index:2;
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
