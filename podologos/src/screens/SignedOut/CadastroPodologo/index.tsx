import { Alert, Text } from 'react-native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FormData } from '../../../components/FormData/Index';
import React, { useState } from 'react';
import Input from '../../../components/FormData/InputForm';
import { Button } from '../../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { CadastroSchema } from '../../../components/Schemas';
import TermosCondicoes from '../../../components/TermosCondicoes';
import api from '../../../services/axios';
import { Toast } from 'toastify-react-native';
import { useRoute } from '@react-navigation/native';
import { regex } from '../../../components/ReGex';
import { Formik } from 'formik';
import ModalOk from '../../../components/PopUps/ModalOk';

export type RouteParams = {
  institution?: string;
  degree_type?: string;
  degree_year?: string;
};

export default function CadastroPodologo({ navigation }: any) {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [visibilidadeCadastroComSucessoPopup, setVisibilidadeCadastroComSucessoPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [infoFormacao, setInfoFormacao] = useState({
    institution: '',
    degree_year: '',
    degree_type: ''
  });
  const route = useRoute();
  const [formData, setFormData] = useState({
    profile_picture: 'ss',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    cep: '',
    password: '',
    confirmarSenha: '',
  });

  const navigateToFormacao = () => {
    navigation.navigate('FormacaoPodologo', {
      onGoBack: (data) => {
        // Callback function to handle data from ScreenB
        setInfoFormacao(data);
        console.log(data);
      },
      infoFormacaoPodologo: infoFormacao,
    });
  };

  async function signUp(data: object) {
    setIsLoadingLogin(true);
    try {
      const infoPod = {...data, ...infoFormacao};
      console.log(infoPod);
      const response = await api.post('/doctor/register', infoPod);
      Toast.success('Sucesso ao cadastrar');
      console.log(response.data);
      setVisibilidadeCadastroComSucessoPopup(true);
    } catch (err: any) {
      Toast.error('Erro no cadastro', '');
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
    setIsLoadingLogin(false);
  }

  const inputsCadastro = [
    {
      name: 'first_name',
      placeholder: 'Nome*',
      component: Input,
    },
    { name: 'last_name', placeholder: 'Sobrenome*', component: Input },
    { name: 'email', placeholder: 'Email*', component: Input },
    { name: 'phone_number', placeholder: 'Telefone*', mascara: regex['Telefone'], component: Input },
    { name: 'cep', placeholder: 'CEP*', mascara: regex['CEP'], component: Input },
    { name: 'password', placeholder: 'Senha*', secureTextEntry: true, component: Input },
    {
      name: 'confirmarSenha',
      placeholder: 'Confirmar senha*',
      secureTextEntry: true,
      component: Input,
    },
  ];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ModalOk 
      modalVisible={visibilidadeCadastroComSucessoPopup} 
      mensagem='Seu cadastro está em análise, aguarde a confirmação para acessar sua conta' 
      onOkClick={() => navigation.goBack()} 
      />
      <ScrollView className='mb-4 w-full'>
        <Button
          onPress={navigateToFormacao}
          className='mb-2 mt-2 w-[87%] self-center border-[1px] border-azul bg-branco'
          placeholder='Formação'
          text='text-azul'
        />
        <FormData.Root
          schema={CadastroSchema}
          initialValues={formData}
          onSubmit={(values) => {
            if (!isChecked) {
              Alert.alert(
                'Erro',
                'Você deve aceitar os Termos e Condições para continuar.'
              );
              return;
            }
            const { confirmarSenha, ...filteredData } = values;
            console.log(filteredData);
            signUp(filteredData);
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: 'self-center mt-6 mb-10 w-[87%]',
              placeholder: 'Criar conta',
              disabled: isLoadingLogin,
              loading: isLoadingLogin,
            }}
            columns={inputsCadastro}
            id='formQuestion'
          >
            <Button
              className='mb-4 mt-4 w-[87%] self-center border-[1px] border-azul bg-branco'
              text='text-azul'
              placeholder='Adicionar foto de perfil'
            >
              <MaterialIcons name='add' size={20} color='#2087ED' />
            </Button>
            <View className='flex w-[90%] flex-row items-center self-center'>
              <Checkbox
                className='ml-4'
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? '#00C86F' : undefined}
              ></Checkbox>
              <TermosCondicoes />
            </View>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
