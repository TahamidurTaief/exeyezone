import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15 seconds timeout
});

// Add a request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.baseURL + config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for better error handling
api.interceptors.response.use(
  (response) => {
    // Validate that response is JSON
    if (response.headers['content-type']?.includes('text/html')) {
      console.error('Received HTML instead of JSON. API might be down or returning an error page.');
      throw new Error('Invalid API response: Expected JSON but received HTML');
    }
    return response;
  },
  (error) => {
    console.error('API Error:', error.message);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
      
      // Handle specific HTTP errors
      if (error.response.status === 404) {
        console.error('API endpoint not found');
      } else if (error.response.status === 500) {
        console.error('Server error');
      } else if (error.response.status === 503) {
        console.error('Service unavailable');
      }
    } else if (error.request) {
      console.error('No response received from server');
      console.error('Request:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;