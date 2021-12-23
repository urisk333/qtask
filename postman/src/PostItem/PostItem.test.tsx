import { render, screen } from '@testing-library/react';
import PostItem from './PostItem';
import mocks from 'Mocks/Mocks';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Post item component', () => {

  test('should render the post component with the given data', () => {

    render(
      <Router>
        <PostItem post={mocks.postData} users={mocks.usersData} mainMessage={mocks.mainMessageItemData.mainMessage}/>
      </Router>
    );

    expect(screen.getAllByText(/sunt/)).toHaveLength(2);
  });
});
