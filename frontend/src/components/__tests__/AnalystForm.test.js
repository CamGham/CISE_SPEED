import { render, screen, waitFor } from '@testing-library/react';
import AnalystForm from '../AnalystForm';
import userEvent from '@testing-library/user-event';

const data = {
  _id: '63460561806bb4e86cae5046',
  title: 'TestingArticle',
  authors: 'Cameron',
  journal: 'Test Journal',
  year: 2022,
  volume: 1,
  version: 1,
  pages: '15',
  doi: 'huasd878wd',
  status: 'accepted',
  semethod: 'TDD',
  claim: 'Improves product quality',
  result: '',
  research: '',
  participant: '',
  __v: 0,
};

test('validation of empty fields', async () => {
  render(<AnalystForm data={data} />);

  const user = userEvent;
  const submitButton = screen.getByRole('button', {
    name: /submit/i,
  });

  user.click(submitButton);

  await waitFor(() => {
    expect(screen.getAllByText('Required')).toHaveLength(3);
  });
});

test('validation of leaving dropdown without input', async () => {
    render(<AnalystForm data={data} />);
    const user = userEvent;
    const result = screen.getByTestId('result');
    const research = screen.getByTestId('research');
    user.click(result);
    user.click(research);

  
    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
    });
  
  });

  test('validation of selecting an option for dropdown', async () => {
    render(<AnalystForm data={data} />);
    const user = userEvent;
    const result = screen.getByTestId('result');
    const research = screen.getByTestId('research');
    user.click(result);
    user.click(research);
    result.setAttribute('value', 'Agree');
    research.setAttribute('value', 'Case Study');

  
    await waitFor(() => {
        expect(screen.queryByText('Required')).not.toBeInTheDocument();
    });
  
  });