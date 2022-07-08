import React, { useCallback, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
import TextInput from '../components/Input/index';
import ButtonShip from '../components/Button/index';

import { rhythm } from '../utils/typography';

import * as S from '../styles/writing.styled';
import ArticleList from '../components/ArticleList';
import * as Svg from '../assets/svg/index';

export const pageQuery = graphql`
	query($language: String!) {
		site {
			siteMetadata {
				title
			}
		}
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
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
	const { t } = useTranslation();

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
				const uppercaseParsed = text.toUpperCase().replace(' ', '');
				setPostsData(
					postsData
						.filter((item) =>
							item.node.frontmatter.tags.includes(uppercaseParsed)
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
				title="Dheyson L. Alves - Blog"
				description={t(
					'Engenheiro de Software com mais de 3 anos de experiência na indústria. Ajudando empresas de diferentes nichos a atingir seu potencial com aplicativos de software.'
				)}
			/>
			<S.BlogPostsWrapper>
				<S.EmphasisParagraph>
					{t('Todas as publicações')} 📝
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
			<S.Divider />
			<ArticleList posts={postsData} />
			{postsData.length === 0 ? (
				<S.SearchUnfound>
					<img
						src={Svg.default.Searcher}
						width="auto"
						height="auto"
					/>
					<S.SearchUnfoundTitle>
						{t('Artigo não encontrado')} 😭
					</S.SearchUnfoundTitle>
					<S.SearchUnfoundDescription>
						{t(
							'Parece que você chegou a uma pesquisa que não existe. Por favor, use a navegação acima ou pesquise acima para encontrar o caminho de volta ao nosso site daora.'
						)}
					</S.SearchUnfoundDescription>
				</S.SearchUnfound>
			) : null}
			<Footer />
		</Layout>
	);
};

export default Writting;
