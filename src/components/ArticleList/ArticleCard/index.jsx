import React from 'react';
import ArticleTagsList from './ArticleTagsList';
import * as S from './styles';

const ArticleCard = ({ slug, tags, title, date, description, excerpt }) => {
	return (
		<S.Article key={slug}>
			<ArticleTagsList tags={tags} />
			<S.ArticleTitle>
				<S.ArticleLink to={'/writing' + slug}>{title}</S.ArticleLink>
			</S.ArticleTitle>
			<S.DateParagraph>{date}</S.DateParagraph>
			<p
				dangerouslySetInnerHTML={{
					__html: description || excerpt,
				}}
			/>
		</S.Article>
	);
};

export default ArticleCard;
