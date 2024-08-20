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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditarPaciente() {
  const { user } = useContext(AuthContext);
  // const [userData, setUserData] = useState({
  //   nome: '',
  //   sobrenome: '',
  //   email: '',
  //   telefone: '',
  //   cep: '',
  // });

  async function EditProfile({ values }: any) {
    try {
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        cep: values.cep,
      };
      //Toast.info("Aguarde...", "");
      console.log('dados enviados para edição:', data);
      const response = await api.patch('/patient/atualizar-perfil', data);
      console.log('Resposta da API:', response.data);
      Toast.success('Sucesso ao editar');
      return response.data;
    } catch (err: any) {
      Toast.error('Erro na edição', '');
      console.error('Erro na edição:', err);
      console.error('Resposta de erro da API:', err.response?.data);
    }
  }

  // async function GetUser() {
  //   try {
  //     const token = await AsyncStorage.getItem('@LIFE:token');
  //     if (!token) {
  //       console.error('Token não encontrado');
  //       return;
  //     }
  //     const response = await api.get('/user', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = response.data;
  //     setUserData({
  //       nome: data.first_name || '',
  //       sobrenome: data.last_name || '',
  //       email: data.email || '',
  //       telefone: data.phone_number || '',
  //       cep: data.cep || '',
  //     });
  //   } catch (error) {
  //     console.log('Erro ao buscar dados do usuário:', error);
  //   }
  // }

  const column = [
    {
      name: 'first_name',
      texto: 'Nome',
      placeholder: user.nome,
      component: Input,
    },
    {
      name: 'last_name',
      texto: 'Sobrenome',
      placeholder: user.sobrenome,
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
      placeholder: user.telefone,
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
