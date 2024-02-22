import '@testing-library/jest-dom';

import InsideAboutPage from '@/app/about/insideAbout/page';
import AboutLayout from '@/app/about/layout';
import renderWithProviders from '@/utils/renderWithProviders';

describe('Inside About route', () => {
  it('snapshot testing', () => {
    const { container } = renderWithProviders(
      <AboutLayout>
        <InsideAboutPage />
      </AboutLayout>,
    );
    expect(container).toMatchSnapshot();
  });
});
