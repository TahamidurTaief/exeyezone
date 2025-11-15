import api from '../axios';

export const getTeamMembers = async (limit = null) => {
  try {
    const url = limit ? `/teams/?limit=${limit}` : '/teams/';
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
};

export const getTeamMemberById = async (id) => {
  try {
    const response = await api.get(`/teams/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team member:', error);
    return null;
  }
};
