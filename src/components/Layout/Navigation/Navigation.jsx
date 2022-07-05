import React, { useState, useContext, useCallback } from 'react';
// import { rhythm } from "../utils/typography"
import Context from '../../../store/context.store';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import * as S from './Navigation.styles';

const Navigation = () => {
	const [iconState, setIconState] = useState();
	const { state, dispatch } = useContext(Context);

	const dispatching = useCallback(() => {
		setIconState(!iconState);
		dispatch({ type: 'TOOGLE_DARK_MODE' });
	}, [dispatch, iconState]);

	return (
		<S.Header>
			<S.Navigation>
				<S.Title title="Opa, e ai?">Dheyson L. Alves</S.Title>
			</S.Navigation>
			<S.Menu
				color={state.isDark ? '#292F36' : '#fff'}
				link={state.isDark ? '#fff' : '#363636'}
			>
				<S.MenuItem>
					<a href="/" title="Página principal">
						Home
					</a>
				</S.MenuItem>
				<S.MenuItem>
					<a href="/writing/" title="Alguns artigos que escrevi">
						Escrita
					</a>
				</S.MenuItem>
				<S.MenuItem>
					<a
						href="https://dheysonalvesportfolio.netlify.app/"
						title="Meus atuais projetos"
						target={`_blank`}
						rel={`noopener noreferrer`}
					>
						Portfólio
					</a>
				</S.MenuItem>
				<S.CursorBulb>
					{state.isDark ? (
						<FaRegLightbulb
							onClick={() => dispatching()}
							size={32}
							title="Que tal acender a luz?"
						/>
					) : (
						<FaLightbulb
							onClick={() => dispatching()}
							size={32}
							title="Que tal apagar a luz?"
						/>
					)}
				</S.CursorBulb>
				{/* <S.MenuItem>
                        <Link to="/about/about">About</Link>
                    </S.MenuItem> */}
			</S.Menu>
		</S.Header>
	);
};

export default Navigation;
