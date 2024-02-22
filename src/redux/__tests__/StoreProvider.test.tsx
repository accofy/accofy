import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { StoreProvider } from '@/redux/StoreProvider';

describe('StoreProvider', () => {
  it('snapshot testing', () => {
    const { container } = render(
      <StoreProvider>
        <div>store provider</div>
      </StoreProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
