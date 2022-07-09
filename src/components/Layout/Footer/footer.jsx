import React from 'react';

import * as S from './footer.styles';
import BiographSocialMedia from '../../BiographSocialMedia';

const Footer = ({ element }) => {
	return (
		<S.Footer ref={element}>
			<S.FooterContent>
				<S.FooterTitle>
					DHEYSON L.ALVES © {new Date().getFullYear()} • POWERED BY
					GATSBY
				</S.FooterTitle>
			</S.FooterContent>
			<BiographSocialMedia logoSize="1.5em" />
		</S.Footer>
	);
};

export default Footer;
