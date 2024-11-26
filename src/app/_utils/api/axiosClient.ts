import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
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
    console.log("Error Response:", error);

    const originalRequest = error.config;

    // error.response.data를 출력하여 구조 확인
    console.log("Error Response Data:", error.response?.data.code);

    if (error.response?.data.code === "5001" && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.get(`/api/reissue`);
        console.log("Reissue API Response:", data);
        localStorage.setItem("accessToken", data.authorization);
        apiClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.authorization}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Reissue Error:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
