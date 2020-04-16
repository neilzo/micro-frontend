import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test("renders a user's name", () => {
  const { getByText } = render(<App user={{ name: 'Aang' }} />);
  const userName = getByText(/hi aang!/i);
  expect(userName).toBeInTheDocument();
});
