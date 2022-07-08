import React from 'react';
import { useTranslation, I18nextContext } from 'gatsby-plugin-react-i18next';

import { formatDate } from '../../../utils/misc';
import ArticleTagsList from '../../ArticleTagsList';
import * as S from './styles';
import { useContext } from 'react';

const ArticleCard = ({ slug, tags, title, date, description, excerpt }) => {
	const { t } = useTranslation();
	const { language } = useContext(I18nextContext);

	return (
		<S.Article key={slug}>
			<S.ArticleTitle>
				<S.ArticleLink to={'/writing' + slug}>{title}</S.ArticleLink>
			</S.ArticleTitle>
			<S.DateParagraph>
				{t('Postado em')} {language === 'pt' ? formatDate(date) : date}{' '}
				• Dheyson L. Alves
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
