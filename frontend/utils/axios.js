import axios from 'axios';

// Get API URL from environment or use default
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

console.log('🔧 API Configuration:', {
  baseURL: API_URL,
  environment: process.env.NODE_ENV,
});

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
  withCredentials: false, // Set to true if you need cookies/auth
});

// Add a request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    const fullUrl = `${config.baseURL}${config.url}`;
    console.log(`📤 API Request: ${config.method?.toUpperCase()} ${fullUrl}`);
    if (config.params) {
      console.log('   Params:', config.params);
    }
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error.message);
    return Promise.reject(error);
  }
);

// Add a response interceptor for better error handling
api.interceptors.response.use(
  (response) => {
    const fullUrl = `${response.config.baseURL}${response.config.url}`;
    console.log(`✅ API Response: ${response.status} ${fullUrl}`);
    
    // Validate that response is JSON
    const contentType = response.headers['content-type'];
    if (contentType && contentType.includes('text/html')) {
      console.error('⚠️  Received HTML instead of JSON. API might be down or returning an error page.');
      console.error('   URL:', fullUrl);
      throw new Error('Invalid API response: Expected JSON but received HTML');
    }
    
    return response;
  },
  (error) => {
    const fullUrl = error.config 
      ? `${error.config.baseURL}${error.config.url}`
      : 'unknown';
    
    console.error(`❌ API Error: ${fullUrl}`);
    console.error('   Message:', error.message);
    
    if (error.response) {
      // Server responded with error status
      console.error('   Status:', error.response.status);
      console.error('   Data:', error.response.data);
      
      // Handle specific HTTP errors
      if (error.response.status === 404) {
        console.error('   🔍 Endpoint not found - Check URL path');
      } else if (error.response.status === 500) {
        console.error('   💥 Server error - Check Django logs');
      } else if (error.response.status === 503) {
        console.error('   🚫 Service unavailable - Is Django running?');
      } else if (error.response.status === 0) {
        console.error('   🔌 Network error - CORS or connection issue');
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('   📡 No response from server');
      console.error('   Is Django running on', API_URL, '?');
      console.error('   Check CORS settings in Django');
    } else {
      // Error in request setup
      console.error('   ⚙️  Request setup error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;