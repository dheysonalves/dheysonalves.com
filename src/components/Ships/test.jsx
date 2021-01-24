import React from 'react';
import { render, screen } from '@testing-library/react';

import Ships from '.';

describe('<Ships />', () => {
    it('should render the heading', () => {
        const { container } = render(<Ships />);

        expect(
            screen.getByRole('heading', { name: /Ships/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
