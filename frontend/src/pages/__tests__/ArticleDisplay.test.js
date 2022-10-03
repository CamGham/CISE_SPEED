import React from 'react';
import {
  render,
  waitForElement,
  cleanup,
  screen,
} from '@testing-library/react';
import ArticleDisplay from '../ArticleDisplay';
import axiosMock from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

afterEach(cleanup);

it('fetches and displays articles', async () => {
  render(
    <Router>
      <ArticleDisplay />
    </Router>
  );
  expect(screen.getByTestId('loading')).toBeInTheDocument();

});
