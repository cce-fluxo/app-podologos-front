import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { Button } from '../../../../components/Button';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Input from '../../../../components/FormData/InputForm';
import { FormData } from '../../../../components/FormData/Index';
import { useContext, useEffect, useState } from 'react';
import { Toast } from 'toastify-react-native';
import api from '../../../../services/axios';
import AuthContext from '../../../../context/AuthContext';

export default function EditarPaciente() {
  const { user, setUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    cep: '',
  });

  useEffect(() => {
    if (user) {
      setUserData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        phone_number: user.phone_number || '',
        cep: user.cep || '',
      });
    }
  }, [user]);

  // async function EditProfile({ values }: any) {
  //   try {
  //     const data = {
  //       first_name: values.first_name,
  //       last_name: values.last_name,
  //       phone_number: values.phone_number,
  //       cep: values.cep,
  //     };
  //     //Toast.info("Aguarde...", "");
  //     console.log('dados enviados para edição:', data);

  //     const response = await api.patch('/patient/atualizar-perfil', data);
  //     console.log('Resposta da API:', response.data);
  //     Toast.success('Sucesso ao editar');
  //     // Atualiza o contexto com os novos dados do usuário
  //     setUser((prevUser) => ({
  //       ...prevUser,
  //       ...data,
  //     }));
  //     return response.data;
  //   } catch (err: any) {
  //     Toast.error('Erro na edição', '');
  //     console.error('Erro na edição:', err);
  //     console.error('Resposta de erro da API:', err.response?.data);
  //   }
  // }
  async function EditProfile(values: any) {
    try {
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        cep: values.cep,
      };
      console.log('dados enviados para edição:', data);
      const response = await api.patch('/patient/atualizar-perfil', data);

      console.log('Resposta da API:', response.data);
      Toast.success('Sucesso ao editar');
      // Atualiza o contexto com os novos dados do usuário
      setUser((prevUser) => ({
        ...prevUser,
        ...data,
      }));
      return response.data;

    } catch (err: any) {
      // Mais detalhes do erro para debug
      console.error('Erro na edição:', err.message);
      console.error('Resposta completa de erro da API:', err.response);
      // Verifique se o erro é relacionado à requisição (e.g., falta de autenticação)
      if (err.response) {
        console.error('Erro no status da requisição:', err.response.status);
        console.error('Dados de erro retornados pela API:', err.response.data);
      } else {
        console.error('Erro inesperado, sem resposta da API:', err);
      }
      Toast.error('Erro na edição', '');
    }
  }

  const column = [
    {
      name: 'first_name',
      texto: 'Nome',
      placeholder: user.first_name,
      component: Input,
    },
    {
      name: 'last_name',
      texto: 'Sobrenome',
      placeholder: user.last_name,
      component: Input,
    },
    {
      name: 'email',
      texto: 'Email',
      placeholder: user.email,
      component: Input,
    },
    {
      name: 'phone_number',
      texto: 'Telefone',
      placeholder: user.phone_number,
      component: Input,
    },
    {
      name: 'cep',
      texto: 'CEP',
      placeholder: user.cep,
      component: Input,
    },
  ];

  return (
    <SafeAreaView className='flex w-full flex-1 bg-branco'>
      <ScrollView>
        <View className='flex items-center justify-center pt-5'>
          <Image className='' source={PerfilImage}></Image>
          <View className='mt-3 flex flex-row items-center justify-center rounded-md bg-zinc-100 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>4.75</Text>
          </View>
        </View>
        <Button
          className='mt-8 self-center border-[1px] border-azul bg-branco'
          placeholder='Editar ficha de anamnese'
          text='text-azul'
        ></Button>

        <FormData.Root
          onSubmit={(data) => {
            console.log('Dados recebidos para salvar:', data);
            EditProfile(data);
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: 'self-center mt-2 mb-10 w-[87%]',
              placeholder: 'Salvar',
            }}
            columns={column}
            id='formQuestion'
          ></FormData.Form>
          <Button
            className='self-center border-[1px] border-azul bg-branco'
            placeholder='Cancelar'
            text='text-azul'
          ></Button>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
