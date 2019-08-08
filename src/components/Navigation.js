import React from "react"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Header = styled.header`
  body, ul, li {
	padding: 0;
	margin: 0;
  }

  a {
      color: black;
      text-decoration: none;
  }
  
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;

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
      <a href="https://github.com/Dheyson" title="Portfolio">Dheyson Alves</a>
      <nav>
        <ul className="menu">
          <li><a href="https://github.com/Dheyson" title="Portfolio">Portfolio</a></li>
          <li><a href="/" title="Sobre autor">Sobre</a></li>
        </ul>
      </nav>
    </Header>
  )
}

export default Navigation
