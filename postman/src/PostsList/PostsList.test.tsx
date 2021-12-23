import { render, screen } from '@testing-library/react';
import PostsList from './PostsList';
import { BrowserRouter as Router } from 'react-router-dom';
import mocks from 'Mocks/Mocks';

describe('Post list components', () => {

  test('should render the post components with the given data', () => {

    render(
      <Router>
        <PostsList posts={mocks.postsData} users={mocks.usersData} comments={mocks.commentsData} mainMessage={mocks.mainMessageListData.mainMessage}/>
      </Router>
    );

    expect(screen.getAllByText(/comments/i)).toHaveLength(2);
  });
});
