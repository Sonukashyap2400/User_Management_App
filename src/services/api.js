import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://reqres.in/api';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// If the API call is successful, just return the response as it is
api.interceptors.response.use(
  (response) => {
    return response;
  },

  // If there's an error during the API call
  (error) => {
    // If the server responded with an error (like 400, 404, 500)
    if (error.response) {
      // Show the error message from the server, or a default one
      toast.error(error.response.data.error || 'Something went wrong');
    } else {
      // If there's no response from the server (like no internet)
      toast.error('Network error. Please try again.');
    }

    // Pass the error along to be handled elsewhere too
    return Promise.reject(error);
  }
);


export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async (page = 1) => {
  try {
    const response = await api.get(`/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await api.delete(`/users/${id}`);
    return true;
  } catch (error) {
    throw error;
  }
};