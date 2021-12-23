import './App.css';
import APIService from 'Services/APIServices';
import Dashboard from 'Dashboard/Dashboard';
import PostsList from 'PostsList/PostsList';
import PostPage from 'PostPage/PostPage';
import { Post, Comment, User } from 'Types/Types';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostContext } from './Context/Context';

function App () {

  const mainMessage = "Hello from ";
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const posts = await APIService.getAllPosts();
      const comments = await APIService.getAllComments();
      const users = await APIService.getAllUsers();
      setPosts(posts);
      setComments(comments);
      setUsers(users);
    })();
  }, []);

  const initialPost: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  return (
    <div className="app-container">
      <PostContext.Provider value={initialPost}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/posts" element={<PostsList posts={posts} users={users} comments={comments} mainMessage={mainMessage} />} /> 
            <Route path="/post/:id" element={<PostPage mainMessage={mainMessage} />} />            
          </Routes>
        </Router> 
      </PostContext.Provider>
    </div>
  );
}

export default App;
