import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import * as S from './styles';

/**
 * Regular input UI component
 */
const Input = ({
	radius,
	height,
	background,
	color,
	borderColor,
	value,
	onChange,
	onKeyDown,
	onBlur,
	counter,
	...props
}) => {
	const { t } = useTranslation();
	const articlesCounterText = counter === 1 ? t('artigo') : t('artigos');

	return (
		<S.Wrapper>
			<S.Input
				radius={radius}
				height={height}
				background={background}
				borderColor={borderColor}
				color={color}
				placeholder={t('Pesquise')}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
				onKeyDown={onKeyDown}
				{...props}
			/>
			<S.PostsCounter>
				{counter} {articlesCounterText}
			</S.PostsCounter>
		</S.Wrapper>
	);
};

Input.propTypes = {
	/**
	 * what is the height? (required)
	 */
	height: PropTypes.string.isRequired,
	/**
	 * what is the radius?
	 */
	radius: PropTypes.string,
	/**
	 * what is the background color?
	 */
	background: PropTypes.string,
	/**
	 * what is the font color?
	 */
	color: PropTypes.string,
	/**
	 * what is the border color?
	 */
	borderColor: PropTypes.string,
	/**
	 * what is input value?
	 */
	value: PropTypes.string.isRequired,
	/**
	 * is the onChange function for the value.
	 */
	onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
	radius: '0px',
	height: '20px',
	borderColor: '#000',
	value: '',
};

export default Input;
