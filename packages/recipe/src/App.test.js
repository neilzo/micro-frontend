import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('./Recipe', () => 'component-recipe');

test('renders', () => {
  const { getByTestId } = render(<App />);
  const wrappingEl = getByTestId('appContainer');
  expect(wrappingEl).toBeInTheDocument();
  expect(wrappingEl).toHaveClass('container');
});
