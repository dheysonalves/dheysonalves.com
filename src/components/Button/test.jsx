import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
	it('should render the `Wanna share an idea?` text', () => {
		const { container } = render(<Button text="testing" />);

		expect(
			screen.getByRole('button', { name: /Wanna share an idea?/i })
		).toBeInTheDocument();
		expect(screen.getByRole('button')).not.toBeDisabled();
		expect(container.firstChild).toMatchSnapshot();
	});
});
