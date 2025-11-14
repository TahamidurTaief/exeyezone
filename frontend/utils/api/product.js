import api from '../axios';

export const fetchProductCategories = async () => {
  try {
    const response = await api.get('/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    return [];
  }
};

export const fetchProducts = async (categoryId = null, searchQuery = '') => {
  try {
    const params = {};
    if (categoryId) params.category = categoryId;
    if (searchQuery) params.search = searchQuery;
    
    const response = await api.get('/products/', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/products/${slug}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    throw error;
  }
};
