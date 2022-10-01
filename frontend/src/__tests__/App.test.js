import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

test('renders home page and nav to submission', async() => {
  render(<App />);
  const user  = userEvent;

  expect(screen.getByText(/SPEED/i)).toBeInTheDocument();

  user.click(screen.getByRole('link', {
    name: /create an article/i
  }));
  expect(screen.getByText(/Article Submission/i)).toBeInTheDocument();

});

// test('renders home page and nav to display', async() => {
//   render(<App />);
//   const user  = userEvent;

//   expect(screen.getByText(/SPEED/i)).toBeInTheDocument();

//   user.click(screen.getByRole('link', {
//     name: /show articles/i
//   }));
//   expect(screen.getByText(/Display/i)).toBeInTheDocument();

// });