import { Toast } from 'toastify-react-native';
import api from './axios';
import { useState } from 'react';
import { Alert } from 'react-native';

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

// export async function signIn({ email, password }: User) {
//   try {
//     const user = { email, password };
//     // Toast.info('Aguarde...', 'loading');
//     const response = await api.post('/auth/signin', user, {
//       withCredentials: true,
//     });
//     console.log('Resposta da API:', response.data);
//     if (response.data && response.data.token) {
//       Toast.success('Sucesso ao logar');
//       return response.data; // Retorne o token se o usuário não for incluído
//     } else {
//       Toast.error('Erro ao receber dados de login', '');
//       return null;
//     }
//   } catch (error) {
//     Toast.error('Erro no login', '');
//     // Alert.alert('Erro', 'Confira se o email e a senha estão corretos.');
//     console.log('Erro na API:', error.response?.data || error.message);
//   }
// }

export async function signIn({ email, password }: User) {
  try {
    const user = { email, password };
    const response = await api.post('/auth/signin', user, {
      withCredentials: true,
    });
    if (response.data && response.data.token) {
      Toast.success('Sucesso ao logar');
      return response.data;
    } else {
      Toast.error('Erro ao receber dados de login', '');
      return null;
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Erro no login';
    Toast.error(errorMessage, '');
    console.log('Erro na API:', error.response?.data || error.message);
    return null;
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
