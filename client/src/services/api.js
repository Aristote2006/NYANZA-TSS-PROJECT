import axios from 'axios';

// Add this at the top of the file to check environment
console.log('=== ENVIRONMENT DEBUG ===');
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
console.log('process.env.REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
console.log('========================');

// Use environment variable for API URL with fallback for different environments
const getApiUrl = () => {
  console.log('Environment variables available:', {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    NODE_ENV: process.env.NODE_ENV
  });
  
  if (process.env.NODE_ENV === 'production') {
    // In production, use the environment variable
    const url = process.env.REACT_APP_API_URL || 'https://nyanzatss-database.onrender.com/api';
    console.log('Using production URL:', url);
    return url;
  } else {
    // In development, use localhost as fallback
    const url = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    console.log('Using development URL:', url);
    return url;
  }
};

const API_BASE_URL = getApiUrl();

console.log('Final API_BASE_URL:', API_BASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Create axios instance with better error handling
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased to 30 seconds
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add token to headers if available
const setAuthToken = (token) => {
  if (token) {
    console.log('Setting auth token in headers');
    api.defaults.headers.common['x-auth-token'] = token;
    console.log('Token set in headers:', api.defaults.headers.common['x-auth-token'] ? 'Success' : 'Failed');
  } else {
    console.log('No token provided, removing auth header');
    delete api.defaults.headers.common['x-auth-token'];
  }
};

// Helper function to construct full image URL
export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it's a relative path starting with /uploads, construct full URL
  if (imagePath.startsWith('/uploads/')) {
    const baseUrl = API_BASE_URL.replace('/api', ''); // Remove /api from base URL
    return `${baseUrl}${imagePath}`;
  }
  
  // For other cases, return as is
  return imagePath;
};

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      headers: config.headers
    });
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      status: response.status,
      statusText: response.statusText,
      url: response.config?.url
    });
    return response;
  },
  (error) => {
    console.error('API Response Error:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });
    
    // Handle network errors specifically
    if (!error.response) {
      console.error('Network Error - Could not connect to server');
      console.error('Attempted URL:', error.config?.baseURL + error.config?.url);
      // You might want to show a user-friendly message here
    }
    
    return Promise.reject(error);
  }
);

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
  markAsRead: (id, token) => {
    setAuthToken(token);
    return api.put(`/contact/${id}`, { status: 'in-progress' });
  },
  markAsReplied: (id, replyData, token) => {
    setAuthToken(token);
    return api.put(`/contact/${id}`, { 
      status: 'resolved', 
      ...replyData 
    });
  },
  deleteMessage: (id, token) => {
    setAuthToken(token);
    return api.delete(`/contact/${id}`);
  },
};

// Analytics API
export const analyticsAPI = {
  getStats: (token) => {
    setAuthToken(token);
    return api.get('/analytics/stats');
  },
  getTrafficSources: (token) => {
    setAuthToken(token);
    return api.get('/analytics/traffic');
  },
  getTopPages: (token) => {
    setAuthToken(token);
    return api.get('/analytics/top-pages');
  },
};

// Backup API
export const backupAPI = {
  getAll: (token) => {
    setAuthToken(token);
    return api.get('/backups');
  },
  create: (type, token) => {
    setAuthToken(token);
    return api.post('/backups', { type });
  },
  download: (filename, token) => {
    setAuthToken(token);
    return api.get(`/backups/${filename}/download`, {
      responseType: 'blob'
    });
  },
  delete: (filename, token) => {
    setAuthToken(token);
    return api.delete(`/backups/${filename}`);
  },
  restore: (filename, token) => {
    setAuthToken(token);
    return api.post(`/backups/restore/${filename}`);
  },
};

// Profile API
export const profileAPI = {
  getProfile: (token) => {
    setAuthToken(token);
    return api.get('/auth/me');
  },
  updateProfile: (profileData, token) => {
    setAuthToken(token);
    return api.put('/auth/profile', profileData);
  },
  changePassword: (passwordData, token) => {
    setAuthToken(token);
    return api.put('/auth/change-password', passwordData);
  },
};

export default api;