import { api } from './api';
import { Toast } from 'toastify-react-native';

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
    const user = { email: email, password: password };
    // Toast.info('Aguarde...', 'loading');
    const response = await api.post('/auth/signin', user, {
      withCredentials: true,
    });
    if (response.data && response.data) {
      Toast.success('Sucesso ao logar');
      console.log(response.data.token);
      
      return response.data; //retornar os dados da API
    } else {
      Toast.error('Erro ao receber dados de login', '');
      return null;
    }
  } catch (error) {
    Toast.error('Erro no login', '');
    console.log(error);
    console.log(error.response.data);
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
