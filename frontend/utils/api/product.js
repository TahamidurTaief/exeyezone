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