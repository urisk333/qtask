import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom/extend-expect';

describe('Dashboard component', () => {

	test('displays posts on hover', async () => {

		const { getByText, getAllByRole } = render(
			<Router>
				<Dashboard />
			</Router>
		);

		userEvent.hover(getByText('Open posts list'));
		await waitFor(() => getAllByRole('link'));
		expect(getAllByRole('link')).not.toHaveLength(0);
	});

  test("contains correct text", async () => {

    render(
      <Router>
        <Dashboard />
      </Router>
    );
    
    const text = screen.getByText('Open posts list');
    expect(text).toBeInTheDocument();
  });
});
