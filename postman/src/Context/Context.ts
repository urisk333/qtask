import { createContext } from 'react';
import { Post } from '../Types/Types';

const initialPost: Post = {
  userId: 0,
  id: 0,
  title: '',
  body: ''
};

const PostContext = createContext(initialPost);

export { PostContext };
