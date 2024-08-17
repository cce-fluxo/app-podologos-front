import { useContext } from 'react';
import { Toast } from 'toastify-react-native';
import AuthContext from '../context/AuthContext';
import api from './axios';

// interface Response {
//   token: string;
//   user: {
//     name: string;
//     email: string;
//   };
// }

type User = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: User) {
  try {
    const user = { email, password };
    // Toast.info('Aguarde...', 'loading');
    const response = await api.post('/auth/signin', user, {
      withCredentials: true,
    });
    console.log('Resposta da API:', response.data);
    if (response.data && response.data.token) {
      Toast.success('Sucesso ao logar');
      return response.data; // Retorne o token se o usuário não for incluído
    } else {
      Toast.error('Erro ao receber dados de login', '');
      return null;
    }
  } catch (error) {
    Toast.error('Erro no login', '');
    console.log('Erro na API:', error.response?.data || error.message);
  }
}

export async function register(data: any) {
  try {
    console.log(data, 'isso');
    //Toast.info("Aguarde...", "");
    const response = await api.post('/patient/registrar-paciente', data, {
      withCredentials: true,
    });
    console.log(response.data, 'fdhfdghfd');
    //Toast.success("Sucesso ao cadastrar");
    return response.data;
  } catch (error) {
    //Toast.error("Erro no cadastro", "");
    console.log(error);
  }
}
