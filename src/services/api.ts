import axios from 'axios';

const api = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((response) => {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('user')) || null;
    if (user) {
      response.headers['X-Auth-UserId'] = user.data.id;
    }
    return response;
  });

  return instance;
};

export default api();
