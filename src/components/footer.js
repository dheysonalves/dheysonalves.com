import React from "react";
import styled from 'styled-components';

import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const IconsWrapper = styled.div`
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

const Footer = () => {
	return (
		<footer>
			© {new Date().getFullYear()}, Construido com
			{` `}
			<a href="https://www.gatsbyjs.org" trget="_blank" rel="noopener noreferrer">Gatsby</a>+<a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
			<IconsWrapper>
				<a href="https://www.linkedin.com/in/dheysonalvess/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size="2em" /></a>
				<a href="https://github.com/Dheyson" target="_blank" rel="noopener noreferrer" className="anchor__specific"><IoLogoGithub size="2em" /> </a>
			</IconsWrapper>
		</footer>
	)
}


export default Footer;
