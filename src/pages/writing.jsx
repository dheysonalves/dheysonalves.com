import React, { useCallback, useContext, useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { useTheme } from 'styled-components';
import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
import Ship from '../components/Ships/index';
import TextInput from '../components/Input/index';
import ButtonShip from '../components/Button/index';

import Context from '../store/context.store';
import { rhythm } from '../utils/typography';

import * as S from '../styles/Blog.styled';

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						tags
					}
				}
			}
		}
	}
`;

const MOCKED_BUTTONS = [
	{
		name: 'HTML',
		active: false,
	},
	{
		name: 'CSS',
		active: false,
	},
	{
		name: 'Javascript',
		active: false,
	},
	{
		name: 'Typescript',
		active: false,
	},
	{
		name: 'PHP',
		active: false,
	},
	{
		name: 'Shell',
		active: false,
	},
	{
		name: 'React',
		active: false,
	},
	{
		name: 'Laravel',
		active: false,
	},
];

const Writting = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMarkdownRemark.edges;
	const { state } = useContext(Context);
	const [search, setSearch] = useState('');
	const [postsData, setPostsData] = useState(posts);
	const theme = useTheme();

	const checkColor = useCallback(
		(elem) => {
			if (state.isDark) {
				return theme.dark[elem];
			}

			return theme.light[elem];
		},
		[state, theme]
	);

	const onChangeSearchValue = useCallback(
		(event) => {
			const inputValue = event.target.value;
			setSearch(inputValue);
			filterTextOnClick(event, inputValue);
		},
		[filterTextOnClick]
	);

	const filterTextOnClick = useCallback(
		(event, text) => {
			event.preventDefault();
			setSearch(text);
			handleFilterPosts(text);
		},
		[handleFilterPosts]
	);

	const handleFilterPosts = useCallback(
		(text) => {
			if (text === '') {
				setPostsData(posts);
			} else {
				setPostsData(
					postsData
						.filter((item) =>
							item.node.frontmatter.tags.includes(
								text.toUpperCase().replace(' ', '')
							)
						)
						.map((item) => item)
				);
			}
		},
		[posts, postsData]
	);

	return (
		<Layout location={location} title={siteTitle} max={rhythm(28)}>
			<SEO
				title="Dheyson Alves - Blog"
				description="Blog sobre desenvolvimento e Computação"
			/>
			<S.BlogPostsWrapper>
				<S.EmphasisParagraph>
					Todas as publicações 📝
				</S.EmphasisParagraph>
				<div style={{ width: '100%', marginBottom: 15 }}>
					<TextInput
						height={100}
						style={{ width: '100%', marginBottom: 15 }}
						value={search}
						onChange={(event) => {
							onChangeSearchValue(event);
						}}
						onKeyDown={(event) => {
							if (event.key === 'Enter') {
								filterTextOnClick(event, search);
							}
						}}
						counter={postsData.length}
					/>
					{MOCKED_BUTTONS.map((item) => (
						<ButtonShip
							key={item.name}
							text={item.name}
							onClick={(e) => filterTextOnClick(e, item.name)}
							bakgroundColor={item.active}
							title=""
							style={{
								height: 'auto',
								width: 'auto',
								marginRight: '5px',
							}}
						/>
					))}
				</div>
			</S.BlogPostsWrapper>
			<hr />
			{postsData.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
				const { tags, date, description } = node.frontmatter;

				return (
					<div key={node.fields.slug}>
						<h3
							style={{
								marginBottom: rhythm(1 / 4),
							}}
						>
							<Link
								style={{
									boxShadow: `none`,
									textTransform: 'uppercase',
								}}
								to={'/writing' + node.fields.slug}
							>
								{title}
							</Link>
						</h3>
						{tags.map((item, index) => (
							<Ship
								color={checkColor(item)}
								key={index}
								label={item + ' '}
								radius={false}
							/>
						))}
						<S.DateParagraph>{date}</S.DateParagraph>
						<p
							dangerouslySetInnerHTML={{
								__html: description || node.excerpt,
							}}
						/>
					</div>
				);
			})}
			<Footer />
		</Layout>
	);
};

export default Writting;
