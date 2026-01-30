import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to headers if available
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (userData) => api.post('/auth/login', userData),
  getMe: () => api.get('/auth/me'),
};

// News API
export const newsAPI = {
  getAll: () => api.get('/news'),
  getFeatured: () => api.get('/news/featured'),
  getById: (id) => api.get(`/news/${id}`),
  create: (newsData, token) => {
    setAuthToken(token);
    return api.post('/news', newsData);
  },
  update: (id, newsData, token) => {
    setAuthToken(token);
    return api.put(`/news/${id}`, newsData);
  },
  delete: (id, token) => {
    setAuthToken(token);
    return api.delete(`/news/${id}`);
  },
};

// Leaders API
export const leadersAPI = {
  getAll: () => api.get('/leaders'),
  getActive: () => api.get('/leaders/active'),
  getById: (id) => api.get(`/leaders/${id}`),
  create: (leaderData, token) => {
    setAuthToken(token);
    return api.post('/leaders', leaderData);
  },
  update: (id, leaderData, token) => {
    setAuthToken(token);
    return api.put(`/leaders/${id}`, leaderData);
  },
  delete: (id, token) => {
    setAuthToken(token);
    return api.delete(`/leaders/${id}`);
  },
};

// Programs API
export const programsAPI = {
  getAll: () => api.get('/programs'),
  getActive: () => api.get('/programs/active'),
  getById: (id) => api.get(`/programs/${id}`),
  create: (programData, token) => {
    setAuthToken(token);
    return api.post('/programs', programData);
  },
  update: (id, programData, token) => {
    setAuthToken(token);
    return api.put(`/programs/${id}`, programData);
  },
  delete: (id, token) => {
    setAuthToken(token);
    return api.delete(`/programs/${id}`);
  },
};

// Contact API
export const contactAPI = {
  sendMessage: (messageData) => api.post('/contact', messageData),
  getAll: (token) => {
    setAuthToken(token);
    return api.get('/contact');
  },
  getById: (id, token) => {
    setAuthToken(token);
    return api.get(`/contact/${id}`);
  },
  update: (id, messageData, token) => {
    setAuthToken(token);
    return api.put(`/contact/${id}`, messageData);
  },
  delete: (id, token) => {
    setAuthToken(token);
    return api.delete(`/contact/${id}`);
  },
};

export default api;