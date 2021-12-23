import './PostItem.css';
import { Post, User } from '../Types/Types';
import { useNavigate } from 'react-router-dom';
import PostPage from 'PostPage/PostPage';

export interface IPropsItem {
  post: Post,
  users: User[],
  mainMessage: string
}

function PostItem ({ post, users, mainMessage }: IPropsItem) {

  const navigate = useNavigate();

  return (
    <div className='posts-list'>
      <div className="post-item" key={post.id}>
        <div className='post-title' data-testid="title-display">{post.title}</div>
        <div className='post-body'>{post.body}</div>
        <div className='post-user'>{users.map((user) => user.id === post.userId ? user.name : null)}</div>
        <button className="post-button" type="button" value={post.id} onClick={() => {
          navigate(`/post/${post.id}`)
          {<PostPage mainMessage={mainMessage} />}}}>
          Open post
        </button>
      </div>
    </div>
  )
}

export default PostItem;
