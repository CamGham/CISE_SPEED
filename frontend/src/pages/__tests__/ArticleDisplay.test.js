import React from 'react';
import {
  render,
  waitForElement,
  cleanup,
  screen,
} from '@testing-library/react';
import ArticleDisplay from '../ArticleDisplay';
import userEvent from '@testing-library/user-event';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

afterEach(cleanup);

it('displays loading when fetching articles', async () => {
  render(
    <Router>
      <ArticleDisplay />
    </Router>
  );
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});

it('Journal checkbox renders', () => {
  render(
    <Router>
      <ArticleDisplay />
    </Router>
  );
  expect(
    screen.getByRole('checkbox', {
      name: /journal/i,
    })
  ).toBeInTheDocument();
});

it('Claim dropdown functional', () => {
  render(
    <Router>
      <ArticleDisplay />
    </Router>
  );
  expect(
    screen.getByText(/se\-method/i)
  ).toBeInTheDocument();
});
