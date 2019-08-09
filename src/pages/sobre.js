import React from "react"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";


class SobrePage extends React.Component {
    render () {
        return (
            <Layout>
                <SEO title="Sobre"></SEO>
            </Layout>
        )
    }
}

export default SobrePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}
`