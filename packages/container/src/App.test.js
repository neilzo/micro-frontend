import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { App } from './App';

jest.mock('./MicroFrontend', () => 'micro-frontend');

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

test('renders the header and About page link', () => {
  const { getByText } = render(<App store={{}} />);
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

test('it calls fetchUser on mount and only once', () => {
  const fetchUser = jest.fn();
  const { rerender } = render(<App store={{}} requestUser={fetchUser} />);

  rerender(<App store={{ some: 'update' }} requestUser={fetchUser} />);

  expect(fetchUser).toBeCalledTimes(1);
});

test('full app rendering/navigating', () => {
  const { getByText } = renderWithRouter(<App store={{}} />);
  expect(getByText(/simple recipe website/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  fireEvent.click(screen.getByText(/about/i), leftClick);

  const aboutPageElement = screen.getByTestId('aboutMotto');
  expect(aboutPageElement.innerHTML).toMatch('Our motto is: Find a recipe. Make it.');
});
