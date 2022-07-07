import React, { useCallback, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
import TextInput from '../components/Input/index';
import ButtonShip from '../components/Button/index';

import { rhythm } from '../utils/typography';

import * as S from '../styles/writing.styled';
import ArticleList from '../components/ArticleList';

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
	const [search, setSearch] = useState('');
	const [postsData, setPostsData] = useState(posts);

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
			<ArticleList posts={postsData} />
			<Footer />
		</Layout>
	);
};

export default Writting;
