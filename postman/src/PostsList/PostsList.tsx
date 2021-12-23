import './PostsList.css';
import { Post, Comment, User } from '../Types/Types';
import PostItem from 'PostItem/PostItem';
import { useState } from 'react';

export interface IPropsList {
  posts: Post[],
  comments: Comment[],
  users: User[],
  mainMessage: string
}

function PostsList ({ posts, comments, users, mainMessage }: IPropsList) {

  const componentName = "PostsList";
  const [userName, setUserName] = useState('');
  const [searchNameResult, setSearchNameResult] = useState<User[] | undefined>();
  const [filteredPosts, setFilteredPosts] = useState<Post[] | undefined>();
  
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setUserName(name);
  };

  const search = () => {
    const newFilteredPosts: Post[] = [];

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(userName.toLowerCase()));
    setSearchNameResult(filteredUsers);

    const filteredPosts = posts.filter((post) => {
      filteredUsers.filter((user) => {
        if (user.id === post.userId) {
          newFilteredPosts.push(post)
        }
      })
    })
    setFilteredPosts(newFilteredPosts);
  };

  return (
    <div className="posts-list-container">
      {console.log(`${mainMessage}${componentName}`)}
      <div className="search-container">
        <div className="search-input">
          <input
            className="input"
            type="text"
            placeholder="Search by name..."
            value={userName}
            onChange={(event) => {
              inputHandler(event)
              search()
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && search();
            }}
          />
          <button className="search-button" onClick={search}>Search</button>
        </div>
        <div className="search-result">
          {userName === '' ?
            (posts.map((post: Post) => (
              <div className="post-item" key={post.id}>
                <PostItem post={post} users={users} mainMessage={mainMessage}/>
                <h3>Comments</h3>
                <div className="comments-list">
                  {comments.map((comment) => comment.postId === post.id 
                  ? (<div className="comment-item" key={comment.id}>{comment.body}</div>) 
                  : null)}
                </div>
              </div>))
            ) : (
            filteredPosts?.map((item: Post) => (
              <div className="post-item" key={item.id}>
                <div className="post-title">
                  {item.title}
                </div>
                <div className="post-body">
                  {item.body}
                </div>
              </div>))
            ) 
          }
        </div>
      </div>
    </div>
  )
}

export default PostsList;
