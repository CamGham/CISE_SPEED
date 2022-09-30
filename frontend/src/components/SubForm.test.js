import { render, screen, waitFor, act } from '@testing-library/react';
import SubForm from './SubForm';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Experimental_CssVarsProvider } from '@mui/material';

test('validation of leaving field without input', async () => {
  render(<SubForm />);
  const user = userEvent;
  const titleField = screen.getByPlaceholderText(/title/i);
  const authorField = screen.getByPlaceholderText(/authors/i);

  user.click(titleField);
  user.click(authorField);

  await waitFor(() => {
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});

test('validation should pass', async () => {
  render(<SubForm />);
  const user = userEvent;
  const titleField = screen.getByPlaceholderText(/title/i);
  const authorField = screen.getByPlaceholderText(/authors/i);

  user.click(titleField);
  user.click(authorField);

  await waitFor(() => {
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  user.type(titleField, 'This is a test');
  user.type(authorField, "author test");

  await waitFor(() => {
    expect(screen.queryByText('Required')).not.toBeInTheDocument();
  });
});

// test('validation of empty fields', async () => {
//   render(<SubForm />);

//   const user = userEvent;
//   const submitButton = screen.getByRole('button', {
//     name: /submit/i,
//   });

//   user.click(submitButton);

//   await waitFor(() => {
//     expect(screen.getByText('Required')).toBeInTheDocument();
//   });
// });

// test('type in a field', async() => {
//     render(<SubForm />);
//     const user  = userEvent;

//       await user.click(screen.getByPlaceholderText(/Title/i));
//       await user.click(screen.getByPlaceholderText(/Authors/i));
//       await expect(screen.getByText(/Required/i)).toBeInTheDocument();

//   });
