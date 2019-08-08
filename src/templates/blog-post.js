import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Heading, Paragraph, Hr, List } from './styles'
// import Disqus from 'disqus-react';
// import {disqusConfig} from '../utils/misc'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    // const siteBase = 'localhost:8000'

    // const disqusShortname = 'dheyson-blog-tech';
    //     // const disqusConfig = {
    //     //      identifier: this.props.markdownRemark.id,
    //     //      title: post.frontmatter.title,
    //     // };
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Heading>
          {post.frontmatter.title}
        </Heading>
        {/* <Disqus.CommentCount shortname={disqusShortname}>
                    Comments
        </Disqus.CommentCount> */}
        <Paragraph>
          {post.frontmatter.date}
        </Paragraph>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Hr/>
        <Bio />

        <List>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
          </List>
        {/* <Disqus.CommentEmbed 
                    commentId={this.props.post}
                    showMedia={true}
                    height={160}
                />
                
                <Disqus.DiscussionEmbed shortname={disqusShortname} /> */}
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
