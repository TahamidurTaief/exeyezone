// utils/api/course.js
import api from '../axios';

export const fetchCategories = async () => {
  try {
    const response = await api.get('/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchCourses = async (categoryId = null) => {
  try {
    const params = categoryId ? { category: categoryId } : {};
    const response = await api.get('/courses/', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};