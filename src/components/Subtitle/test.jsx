import React from 'react';
import { render, screen } from '@testing-library/react';

import Subtitle from '.';

describe('<Subtitle />', () => {
    it('should render the heading', () => {
        const { container } = render(<Subtitle />);

        expect(
            screen.getByRole('heading', { name: /Subtitle/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
