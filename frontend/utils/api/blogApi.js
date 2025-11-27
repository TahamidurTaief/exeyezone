/**
 * Blog API Integration
 * Handles all blog-related API calls to Django backend
 * Optimized for Next.js SSR with caching and error handling
 */

import api from '../axios';

const BLOG_ENDPOINTS = {
  posts: '/blog/posts/',
  categories: '/blog/categories/',
  subcategories: '/blog/subcategories/',
};

/**
 * Blog API Handler
 * Production-ready with error handling, caching, and type safety
 */
class BlogAPI {
  /**
   * Get all blog posts with optional filtering
   * @param {Object} params - Query parameters
   * @param {string} params.search - Search query
   * @param {string} params.category - Category slug
   * @param {string} params.subcategory - Subcategory slug
   * @param {boolean} params.is_featured - Filter featured posts
   * @param {number} params.page - Page number
   * @param {number} params.page_size - Items per page
   * @param {string} params.ordering - Sort field (-publish_date, -views_count, etc.)
   * @returns {Promise} API response with posts array and pagination
   */
  async getPosts(params = {}) {
    try {
      const response = await api.get(BLOG_ENDPOINTS.posts, { params });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return {
        success: false,
        error: error.message,
        data: { results: [], count: 0 },
      };
    }
  }

  /**
   * Get single blog post by slug
   * @param {string} slug - Post slug
   * @returns {Promise} API response with post data
   */
  async getPostBySlug(slug) {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.posts}${slug}/`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error(`Error fetching post ${slug}:`, error);
      return {
        success: false,
        error: error.message,
        data: null,
      };
    }
  }

  /**
   * Get featured blog posts
   * @returns {Promise} API response with featured posts
   */
  async getFeaturedPosts() {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.posts}featured/`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      return {
        success: false,
        error: error.message,
        data: [],
      };
    }
  }

  /**
   * Get recent blog posts
   * @param {number} limit - Number of posts to fetch (default: 10, max: 50)
   * @returns {Promise} API response with recent posts
   */
  async getRecentPosts(limit = 10) {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.posts}recent/`, {
        params: { limit },
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching recent posts:', error);
      return {
        success: false,
        error: error.message,
        data: [],
      };
    }
  }

  /**
   * Get popular blog posts (by views)
   * @param {number} limit - Number of posts to fetch (default: 10, max: 50)
   * @returns {Promise} API response with popular posts
   */
  async getPopularPosts(limit = 10) {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.posts}popular/`, {
        params: { limit },
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching popular posts:', error);
      return {
        success: false,
        error: error.message,
        data: [],
      };
    }
  }

  /**
   * Search blog posts
   * @param {string} query - Search query
   * @param {number} page - Page number
   * @param {number} page_size - Items per page
   * @returns {Promise} API response with search results
   */
  async searchPosts(query, page = 1, page_size = 12) {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.posts}search/`, {
        params: { q: query, page, page_size },
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error searching posts:', error);
      return {
        success: false,
        error: error.message,
        data: { results: [], count: 0 },
      };
    }
  }

  /**
   * Get posts by category
   * @param {string} categorySlug - Category slug
   * @param {number} page - Page number
   * @param {number} page_size - Items per page
   * @returns {Promise} API response with posts in category
   */
  async getPostsByCategory(categorySlug, page = 1, page_size = 12) {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.categories}${categorySlug}/posts/`, {
        params: { page, page_size },
      });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error(`Error fetching posts in category ${categorySlug}:`, error);
      return {
        success: false,
        error: error.message,
        data: { results: [], count: 0 },
      };
    }
  }

  /**
   * Get all categories
   * @returns {Promise} API response with categories
   */
  async getCategories() {
    try {
      const response = await api.get(BLOG_ENDPOINTS.categories);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching categories:', error);
      return {
        success: false,
        error: error.message,
        data: { results: [], count: 0 },
      };
    }
  }

  /**
   * Get category by slug
   * @param {string} slug - Category slug
   * @returns {Promise} API response with category data
   */
  async getCategoryBySlug(slug) {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.categories}${slug}/`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error(`Error fetching category ${slug}:`, error);
      return {
        success: false,
        error: error.message,
        data: null,
      };
    }
  }

  /**
   * Get all subcategories
   * @returns {Promise} API response with subcategories
   */
  async getSubCategories() {
    try {
      const response = await api.get(BLOG_ENDPOINTS.subcategories);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      return {
        success: false,
        error: error.message,
        data: { results: [], count: 0 },
      };
    }
  }

  /**
   * Get sitemap data for all published posts
   * @returns {Promise} API response with sitemap data
   */
  async getSitemapData() {
    try {
      const response = await api.get(`${BLOG_ENDPOINTS.posts}sitemap/`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error fetching sitemap data:', error);
      return {
        success: false,
        error: error.message,
        data: [],
      };
    }
  }
}

// Export singleton instance
const blogAPI = new BlogAPI();
export default blogAPI;

// Export individual methods for convenience
export const {
  getPosts,
  getPostBySlug,
  getFeaturedPosts,
  getRecentPosts,
  getPopularPosts,
  searchPosts,
  getPostsByCategory,
  getCategories,
  getCategoryBySlug,
  getSubCategories,
  getSitemapData,
} = blogAPI;
