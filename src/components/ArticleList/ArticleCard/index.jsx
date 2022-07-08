import React from 'react';
import { formatDate } from '../../../utils/misc';
import ArticleTagsList from '../../ArticleTagsList';
import * as S from './styles';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ArticleCard = ({ slug, tags, title, date, description, excerpt }) => {
	const { t } = useTranslation();

	return (
		<S.Article key={slug}>
			<S.ArticleTitle>
				<S.ArticleLink to={'/writing' + slug}>{title}</S.ArticleLink>
			</S.ArticleTitle>
			<S.DateParagraph>
				{t('Postado em')} {formatDate(date)} • Dheyson L. Alves
			</S.DateParagraph>
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
