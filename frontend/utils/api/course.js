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

export const fetchCourseBySlug = async (slug) => {
  try {
    const response = await api.get(`/courses/${slug}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course details:', error);
    return null;
  }
};

export const submitCourseRegistration = async (data) => {
  try {
    const response = await api.post('/course-registrations/', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting course registration:', error);
    throw error;
  }
};