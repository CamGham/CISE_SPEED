import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import ArticleDisplay from '../ArticleDisplay';
import { BrowserRouter as Router } from 'react-router-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

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
  expect(screen.getByText(/se-method/i)).toBeInTheDocument();
});

it('Search bar renders', () => {
  render(
    <Router>
      <ArticleDisplay />
    </Router>
  );
  expect(screen.getByTestId('search-bar')).toBeInTheDocument();
});

// const articleSearchResponse = rest.get(
//   "http://localhost:8082/api/articles/bytitle?title='TestCam'",
//   (req, res, ctx) => {
//     return res(ctx.json([{ title: 'TestCam', author: 'test', year: 2000 }]));
//   }
// );
// const handlers = [articleSearchResponse]

// const server = new setupServer(...handlers); //represents api we will be conencting to
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('it should display the article titled TestCam', async () => {
//   render(
//     <Router>
//       <ArticleDisplay />
//     </Router>
//   );
//   const articleTitle = await screen.findByText('TestCam');
//   expect(articleTitle).toBeVisible();
// });
