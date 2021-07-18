import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../index';

describe('Home', () => {
	test('Render Home component', () => {
		render(<Home />);

		expect(screen.getByText('SEO')).toBeInTheDocument();
	});
});
