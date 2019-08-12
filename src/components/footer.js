import React from "react"


const Footer = () => {
    return (
       <footer>
       © {new Date().getFullYear()}, Construido com
          {` `}
          <a href="https://www.gatsbyjs.org" Target="_blank" rel="noopener noreferrer">Gatsby</a>+<a href="https://pt-br.reactjs.org/" Target="_blank" rel="noopener noreferrer">React</a>
       </footer>
    )
}

export default Footer;