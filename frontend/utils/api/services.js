import api from '../axios';

export const getServices = async (limit = null) => {
  try {
    const url = limit ? `/services/?limit=${limit}` : '/services/';
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export const getServiceById = async (id) => {
  try {
    const response = await api.get(`/services/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
};

export const getServiceBySlug = async (slug) => {
  try {
    const response = await api.get(`/services/slug/${slug}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    return null;
  }
};
