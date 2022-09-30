import { render, screen, waitFor } from '@testing-library/react';
import Submission from '../Submission';
import App from "../../App";
import userEvent from '@testing-library/user-event';

test('nav to submission', async () => {
    render(<App />);
  const user  = userEvent;

  user.click(screen.getByRole('link', {
    name: /create an article/i
  }));
  expect(screen.getByText(/Article Submission/i)).toBeInTheDocument();
  })

test('nav to home', async () => {
    render(<App />);
  const user  = userEvent;

  user.click(screen.getByText(/home/i));
  expect(screen.getByText(/SPEED/i)).toBeInTheDocument();


})

