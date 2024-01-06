import axios from 'axios';
import { apiUrl } from './api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    localStorage.setItem('token', response.data.token); // Store token locally
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token'); 
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

