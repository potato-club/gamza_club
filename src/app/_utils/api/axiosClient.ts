import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.get(`/api/reissue`);

        localStorage.setItem('access', data.authorization);
        apiClient.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.authorization}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
