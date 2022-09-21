module.exports = {
	pathPrefix: `/blog`,
	siteMetadata: {
		title: `Um site de um desenvolvedor de software`,
		author: `Dheyson L. Alves`,
		description: `Um site sobre computação e desenvolvimento`,
		siteUrl: `https://dheysonalves-blog.netlify.app/`,
		social: {
			twitter: `@dheysonlalves`,
		},
		charSet: `utf8`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-load-script',
			options: {
				id: 's9-sdk',
				async: true,
				defer: true,
				content: 'f95292bfecf3490b8c41a2217e7c2426',
				src: '//cdn.social9.com/js/socialshare.min.js',
			},
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				host: `https://dheysonalves-blog.netlify.app/`,
				sitemap: `https://dheysonalves-blog.netlify.app/sitemap.xml`,
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sitemap`,
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
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/locales`,
				name: `locale`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				pedantic: false,
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
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (e.g. <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (e.g. for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-',
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in gatsby-browser.js
							// right after importing the prism color scheme:
							//  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: false,
							// This adds a new language definition to Prism or extend an already
							// existing language definition. More details on this option can be
							// found under the header "Add new language definition or extend an
							// existing language" below.
							languageExtensions: [
								{
									language: 'superscript',
									extend: 'javascript',
									definition: {
										superscript_types: /(SuperType)/,
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/,
										},
									},
								},
							],
							// Customize the prompt used in shell output
							// Values below are default
							prompt: {
								user: 'root',
								host: 'localhost',
								global: false,
							},
							// By default the HTML entities <>&'" are escaped.
							// Add additional HTML escapes by providing a mapping
							// of HTML entities and their escape value IE: { '}': '&#123;' }
							escapeEntities: {},
						},
					},

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
				respectDNT: true,
			},
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Dheyson L. Alves - um site de um desenvolvedor de software`,
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
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
				languages: [`pt`, `en`],
				defaultLanguage: `pt`,
				// if you are using Helmet, you must include siteUrl, and make sure you add http:https
				siteUrl: `https://dheysonalves-blog.netlify.app/`,
				// if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
				trailingSlash: 'always',
				// you can pass any i18next options
				i18nextOptions: {
					interpolation: {
						escapeValue: false, // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false,
				},
				pages: [
					{
						matchPath: '/:lang?/blog/:uid',
						getLanguageFromPath: true,
					},
					{
						matchPath: '/preview',
						languages: ['pt'],
					},
				],
			},
		},
	],
};
