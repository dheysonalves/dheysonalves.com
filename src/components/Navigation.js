import React from "react"
// import { rhythm } from "../utils/typography"
import styled from "styled-components"
import { Link } from "gatsby";

const Header = styled.header`
  body, ul, li {
	padding: 0;
	margin: 0;
  }

  a {
      color: black;
      text-decoration: none;
  }

  a:hover {
      color:gray;
  }

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  overflow: hidden;

  .menu {
    display: flex;
    list-style: none;
  }

  .menu li {
    margin-left: 10px;
  }

  .menu li a {
    display: block;
    padding: 10px;
  }

`

const Navigation = () => {
	return (
		<Header>
			<Link to="/">Dheyson Alves</Link>
			<nav>
				<ul className="menu">
					<li><a href="https://dheyson10.gitbook.io/breakpoint/" title="Portfolio" target={`_blank`} rel={`noopener noreferrer`}>Doc</a></li>
					<li><a href="https://github.com/Dheyson" title="Portfolio" target={`_blank`} rel={`noopener noreferrer`}>Portfolio</a></li>
					<li><Link to="/sobre/">Sobre</Link></li>
				</ul>
			</nav>
		</Header>
	)
}

export default Navigation
