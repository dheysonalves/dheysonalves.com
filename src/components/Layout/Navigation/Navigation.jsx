import React, { useState, useContext, useCallback } from 'react';
import Context from '../../../store/context.store';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import * as S from './Navigation.styles';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const Navigation = () => {
	const [iconState, setIconState] = useState();
	const { state, dispatch } = useContext(Context);
	const { languages, changeLanguage } = useI18next();
	const { t } = useTranslation();

	const dispatching = useCallback(() => {
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
					<a href="/" title={t('Página principal')}>
						{t('Home')}
					</a>
				</S.MenuItem>
				<S.MenuItem>
					<a href="/writing/" title={t('Alguns artigos que escrevi')}>
						{t('Escrita')}
					</a>
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
					<a href="/about/" title={t('Alguns artigos que escrevi')}>
						{t('Sobre')}
					</a>
				</S.MenuItem>
				<S.CursorBulb>
					{state.isDark ? (
						<FaRegLightbulb
							onClick={() => dispatching()}
							size={32}
							title={t('Que tal acender a luz?')}
						/>
					) : (
						<FaLightbulb
							onClick={() => dispatching()}
							size={32}
							title={t('Que tal apagar a luz?')}
						/>
					)}
				</S.CursorBulb>
				{languages.map((language) => (
					<S.LanguageMenuItem key={language}>
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								changeLanguage(language);
							}}
						>
							{language}
						</a>
					</S.LanguageMenuItem>
				))}
			</S.Menu>
		</S.Header>
	);
};

export default Navigation;
