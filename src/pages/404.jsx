import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
import * as Svg from '../assets/svg/index';
import Context from '../store/context.store';

const NotFoundPage = ({ data, location }) => {
	const { state } = useContext(Context);
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title="404: Error Page"
				description="Uma página de erro que poderia encontrar a solicitação."
			/>
			<div style={{ textAlign: 'center', marginTop: 10 }}>
				<img
					src={state.isDark ? Svg.default.Cat : Svg.default.Searcher}
					width="auto"
					height="auto"
				/>
				<h1>Ah não! Algo está errado...</h1>
				<p>Você clicou em uma rota que não existe ... que pena.</p>
			</div>
			<Footer />
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default NotFoundPage;
