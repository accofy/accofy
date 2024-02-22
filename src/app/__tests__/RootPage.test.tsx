import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import RootPage from '@/app/page';

describe('Root layout', () => {
  it('snapshot testing', () => {
    const { container } = render(<RootPage />);
    expect(container).toMatchSnapshot();
  });
});
