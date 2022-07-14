import React, { useState, useContext, useCallback } from 'react';
import {
	useI18next,
	useTranslation,
	I18nextContext,
} from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';

import Context from '../../../store/context.store';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import * as S from './Navigation.styles';

const Navigation = () => {
	const [iconState, setIconState] = useState();
	const { state, dispatch } = useContext(Context);
	const { language } = useContext(I18nextContext);
	const { languages, changeLanguage } = useI18next();
	const { t } = useTranslation();

	const dispatchToogleThemeMode = useCallback(() => {
		setIconState(!iconState);
		dispatch({ type: 'TOOGLE_DARK_MODE' });
	}, [dispatch, iconState]);

	return (
		<S.Header>
			<S.Navigation>
				<S.LinkStyled to="/">
					<S.Title title={t('Opa, e ai?')}>Dheyson L. Alves</S.Title>
				</S.LinkStyled>
			</S.Navigation>
			<S.Menu
				color={state.isDark ? '#292F36' : '#fff'}
				link={state.isDark ? '#fff' : '#363636'}
			>
				<S.MenuItem>
					<Link
						to={language === 'pt' ? '/' : '/en/'}
						title={t('Página principal')}
						activeStyle={{ color: '#ff6100' }}
					>
						{t('Home')}
					</Link>
				</S.MenuItem>
				<S.MenuItem>
					<Link
						to={language === 'pt' ? '/writing' : '/en/writing'}
						title={t('Alguns artigos que escrevi')}
						activeStyle={{ color: '#ff6100' }}
					>
						{t('Escrita')}
					</Link>
				</S.MenuItem>
				<S.MenuItem>
					<a
						href="https://dheysonalvesportfolio.netlify.app/"
						title={t('Meus atuais projetos')}
						target={`_blank`}
						rel={`noopener noreferrer`}
					>
						{t('Portfólio')}
					</a>
				</S.MenuItem>
				<S.MenuItem>
					<Link
						to={language === 'pt' ? '/about/' : '/en/about/'}
						title={t('Alguns artigos que escrevi')}
						activeStyle={{ color: '#ff6100' }}
					>
						{t('Sobre')}
					</Link>
				</S.MenuItem>
				<S.CursorBulb>
					{state.isDark ? (
						<FaRegLightbulb
							onClick={() => dispatchToogleThemeMode()}
							size={32}
							title={t('Que tal acender a luz?')}
						/>
					) : (
						<FaLightbulb
							onClick={() => dispatchToogleThemeMode()}
							size={32}
							title={t('Que tal apagar a luz?')}
						/>
					)}
				</S.CursorBulb>
				{languages.map((lang) => (
					<S.LanguageMenuItem key={lang}>
						<S.LanguageLink
							color={lang === language ? '#ff6100' : ''}
							href="#"
							onClick={(e) => {
								e.preventDefault();
								changeLanguage(lang);
							}}
						>
							{lang}
						</S.LanguageLink>
					</S.LanguageMenuItem>
				))}
			</S.Menu>
		</S.Header>
	);
};

export default Navigation;
