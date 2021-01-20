import { render, screen } from '@testing-library/react';

import Image from '.';

describe('<Image />', () => {
    it('should render the heading', () => {
        const { container } = render(<Image />);

        expect(
            screen.getByRole('heading', { name: /Image/i })
        ).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
