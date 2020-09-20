module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `A personal developer website`,
    author: `Dheyson Alves`,
    description: `A developer website about computing and development`,
    siteUrl: `https://dheyson-personal-website.herokuapp.com/`,
    social: {
      twitter: `DheysonAlves2`,
    },
  },
  plugins: [
    {
    resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://dheyson-personal-website.herokuapp.com/`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-145848940-1`,
        head: true,
        respectDNT: true
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dheyson Alves - a software developer website`,
        short_name: `Dheyson Alves`,
        start_url: `/`,
        background_color: `#D9D9D9`,
        theme_color: `#ff6100`,
        display: `minimal-ui`,
        icon: `content/assets/avatar6.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
		},
  ],
}
