import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Navbar from "./navigation"
// import Menu from "./menu"
import Footer from "./footer"
import { rhythm, scale } from "../utils/typography"

const Wrapper = styled.div`
		height: 100vh;
    margin: 0 auto;
    max-width: ${rhythm(25)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
    background-color: white;
`
const Head1 = styled.h1`
    ${scale(1.5)};
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
`
const Head3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  max-width: ${rhythm(50)};
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Head1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </Head1>
      )
    } else {
      header = (
        <Head3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </Head3>
      )
    }
    return (
      <Wrapper>
        <header>
          <Navbar />
          {header}
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
