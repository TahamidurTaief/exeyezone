import api from '../axios';

export const getProducts = async (limit = null) => {
  try {
    const url = limit ? `/products/?limit=${limit}` : '/products/';
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/products/slug/${slug}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }
};

export const getFeaturedProducts = async () => {
  try {
    const response = await api.get('/products/featured/');
    return response.data;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
};
