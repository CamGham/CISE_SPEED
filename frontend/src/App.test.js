import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from "react-router-dom";
import { Experimental_CssVarsProvider } from '@mui/material';

test('renders home page and nav to submission', async() => {
  render(<App />);
  const user  = userEvent;

  expect(screen.getByText(/SPEED/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Create an Article/i));
  expect(screen.getByText(/Article Submission/i)).toBeInTheDocument();

});
