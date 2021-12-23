import './PostPage.css';
import APIService from 'Services/APIServices';
import { Post } from '../Types/Types';
import { PostContext } from 'Context/Context';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export interface IPropsPage {
  mainMessage: string
}

function PostPage ({ mainMessage }: IPropsPage) {

  const nameComponent = "PostItem";
  const { userId, id, title, body } = useContext(PostContext);
  const emptyPost = {
    userId,
    id,
    title,
    body
  }
  const [post, setPost] = useState<Post>(emptyPost);
  const params = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const id = Number(params.id)
      const renderPost = await APIService.getOnePost(id);
      setPost(renderPost)
    })();
  }, []);

  return (
    <div className="posts-list-container">
      <div className="post-item">
        {console.log(`${mainMessage}${nameComponent}`)}
        <div className="post-title">
          {post.title}
        </div>
        <div className="post-body">
          {post.body}
        </div>
        <button className="post-button" id="page-post-button" type="button" value={post.id} onClick={() => {
          navigate('/posts')}}>
          Back
        </button>
      </div>
    </div>
  )
}

export default PostPage;
