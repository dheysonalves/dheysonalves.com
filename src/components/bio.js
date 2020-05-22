/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'

import { rhythm } from "../utils/typography"

const Wrapper = styled.div`

        display: flex;
        margin-bottom: ${rhythm(2.5)};
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar6.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Wrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Escrito por <strong>{author}</strong> estudante de Ciência da Computação na UNIFAVIP, Desenvolvedor Front-end.
        {` `}
        <br />
        <a href={`https://twitter.com/${social.twitter}`} target={`_blank`} rel={`noopener noreferrer`}>
          Saber mais, segue no Twitter.
        </a>
        <br />
        <br />
      </p>



    </Wrapper>
  )
}

export default Bio
