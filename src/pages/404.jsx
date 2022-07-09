import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import * as Svg from '../assets/svg/index';
import Context from '../store/context.store';

const NotFoundPage = ({ data, location }) => {
	const { state } = useContext(Context);
	const siteTitle = data.site.siteMetadata.title;
	const { t } = useTranslation();

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title="404: Error Page"
				description={t(
					'Uma página de erro que poderia encontrar a solicitação.'
				)}
			/>
			<div style={{ textAlign: 'center', marginTop: 10 }}>
				<img
					src={state.isDark ? Svg.default.Cat : Svg.default.Searcher}
					width="auto"
					height="auto"
				/>
				<h1>{t('Ah não! Algo está errado...')}</h1>
				<p>
					{t('Você clicou em uma rota que não existe ... que pena.')}
				</p>
			</div>
		</Layout>
	);
};

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
	}
`;

export default NotFoundPage;
