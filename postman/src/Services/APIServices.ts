import { Post, Comment, User } from '../Types/Types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function fetchRequest<T> (path: string, options?: RequestInit): Promise<T> {
  return fetch(`${BASE_URL}${path}`, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => console.log('Error: ', err));
}

function getAllPosts (): Promise<Post[]> {
  return fetchRequest('/posts');
}

function getAllComments (): Promise<Comment[]> {
  return fetchRequest('/comments');
}

function getAllUsers (): Promise<User[]> {
  return fetchRequest('/users');
}

function getOnePost (id: number): Promise<Post> {
  return fetchRequest(`/posts/${id}`)
}

const APIService = {
  getAllPosts,
  getAllComments,
  getAllUsers,
  getOnePost
}

export default APIService;
