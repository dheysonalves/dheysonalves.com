import React from "react"
// import { rhythm } from "../utils/typography"
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  body, ul, li {
	padding: 0;
	margin: 0;
  }

  padding: 10px;

  .menu {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .menu li {
    margin-left: 10px;
  }

  .menu li a {
    display: block;
    padding: 10px;
  }

  a {
      color: black;
      text-decoration: none;
  }

  a:hover {
      color:gray;
  }
`


const Menu = () => {
	return (
		<Wrapper>
			<ul className="menu">
				<li><Link to="/">Web</Link></li>
				<li><Link to="/">Computação</Link></li>
				<li><Link to="/">Open Source</Link></li>
			</ul>
		</Wrapper>
	)
}

export default Menu
