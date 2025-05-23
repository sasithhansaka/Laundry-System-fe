import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lms-system-9a515d1462cd.herokuapp.com',
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/api/users');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/users/register', {
      ...userData,
      // Remove these if the backend generates them automatically
      id: undefined, // Typically auto-generated by the server
      createdAt: undefined,
      lastUpdatedAt: undefined
    });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
    throw error;
  }
};