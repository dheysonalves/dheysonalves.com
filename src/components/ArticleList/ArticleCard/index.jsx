import React from 'react';
import ArticleTagsList from './ArticleTagsList';
import * as S from './styles';

const ArticleCard = ({ slug, tags, title, date, description, excerpt }) => {
	return (
		<S.Article key={slug}>
			<S.ArticleTitle>
				<S.ArticleLink to={'/writing' + slug}>{title}</S.ArticleLink>
			</S.ArticleTitle>
			<S.DateParagraph>{date}</S.DateParagraph>
			<S.EmphasisParagraph
				dangerouslySetInnerHTML={{
					__html: description || excerpt,
				}}
			/>
			<ArticleTagsList tags={tags} />
		</S.Article>
	);
};

export default ArticleCard;
