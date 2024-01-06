import axios from 'axios';

export const apiUrl = 'http://localhost:5234'; 

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; 
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${apiUrl}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};
