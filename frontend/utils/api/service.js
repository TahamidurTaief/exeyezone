import api from "../axios";

/**
 * Fetch all services
 * @returns {Promise} Promise containing array of services
 */
export const getAllServices = async () => {
  try {
    const response = await api.get("/services/");
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

/**
 * Fetch a single service by ID
 * @param {number} id - Service ID
 * @returns {Promise} Promise containing service details
 */
export const getServiceById = async (id) => {
  try {
    const response = await api.get(`/services/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching service ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch all service categories
 * @returns {Promise} Promise containing array of service categories
 */
export const getServiceCategories = async () => {
  try {
    const response = await api.get("/servicecategories/");
    return response.data;
  } catch (error) {
    console.error("Error fetching service categories:", error);
    throw error;
  }
};

/**
 * Create a service order
 * @param {Object} orderData - Order data including service details
 * @returns {Promise} Promise containing the created order
 */
export const createServiceOrder = async (orderData) => {
  try {
    const response = await api.post("/service-orders/", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating service order:", error);
    throw error;
  }
};

/**
 * Create a hire request
 * @param {Object} hireData - Hire request data
 * @returns {Promise} Promise containing the created hire request
 */
export const createHireRequest = async (hireData) => {
  try {
    const response = await api.post("/hire-requests/", hireData);
    return response.data;
  } catch (error) {
    console.error("Error creating hire request:", error);
    throw error;
  }
};
