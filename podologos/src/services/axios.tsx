import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://podologos-back-ecbm.onrender.com',
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('@LIFE:token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Erro ao recuperar o token:', error);
    }

    return config;
  },
  (error) => {
    // Trata erros de requisição
    return Promise.reject(error);
  }
);

export default api;
