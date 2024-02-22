import '@testing-library/jest-dom';

import AboutLayout from '@/app/about/layout';
import AboutPage from '@/app/about/page';
import renderWithProviders from '@/utils/renderWithProviders';

describe('About route', () => {
  it('snapshot testing', () => {
    const { container } = renderWithProviders(
      <AboutLayout>
        <AboutPage />
      </AboutLayout>,
    );
    expect(container).toMatchSnapshot();
  });
});
