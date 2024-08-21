import { Alert } from 'react-native';
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

type RouteParams = {
  institution?: string;
  degree_type?: string;
  degree_year?: string;
};

export default function CadastroPodologo({ navigation }: any) {
  const [isChecked, setIsChecked] = useState(false);
  const route = useRoute();
  const [formData, setFormData] = useState({
    profile_picture: '1',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    cep: '',
    password: '',
    confirmarSenha: '',
    institution: '',
    degree_year: '',
    degree_type: '',
  });

  React.useEffect(() => {
    if (route.params) {
      const { institution, degree_year, degree_type } =
        route.params as RouteParams;
      setFormData((prevData) => ({
        ...prevData,
        institution: institution || prevData.institution,
        degree_year: degree_year || prevData.degree_year,
        degree_type: degree_type || prevData.degree_type,
      }));
    }
  }, [route.params]);

  // const handleNavigateToFormacao = () => {
  //   // Atualiza o estado local com os dados atuais do formulário
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     // Aqui, substituímos os valores pelos dados atuais dos campos preenchidos
  //     first_name: prevData.first_name,
  //     last_name: prevData.last_name,
  //     email: prevData.email,
  //     phone_number: prevData.phone_number,
  //     cep: prevData.cep,
  //     password: prevData.password,
  //     confirmarSenha: prevData.confirmarSenha,
  //   }));

  //   // Navega para a tela de formação
  //   navigation.navigate('FormacaoPodologo', {
  //     ...formData, // Passa os dados já preenchidos para a tela de formação, se necessário
  //   });
  // };

  async function signUp(data: object) {
    try {
      //Toast.info("Aguarde...", "");
      const response = await api.post('/patient/registrar-paciente', data);
      Toast.success('Sucesso ao cadastrar');
      console.log(response.data);
      return response.data;
    } catch (err: any) {
      Toast.error('Erro no cadastro', '');
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }

  const column = [
    {
      name: 'first_name',
      placeholder: 'Nome*',
      component: Input,
    },
    { name: 'last_name', placeholder: 'Sobrenome*', component: Input },
    { name: 'email', placeholder: 'Email*', component: Input },
    { name: 'phone_number', placeholder: 'Telefone*', component: Input },
    { name: 'cep', placeholder: 'CEP*', component: Input },
    { name: 'password', placeholder: 'Senha*', component: Input },
    {
      name: 'confirmarSenha',
      placeholder: 'Confirmar senha*',
      component: Input,
    },
  ];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='mb-4 w-full'>
        <Button
          onPress={() => navigation.navigate('FormacaoPodologo')}
          className='mb-2 mt-2 w-[87%] self-center border-[1px] border-azul bg-branco'
          placeholder='Formação'
          text='text-azul'
        ></Button>
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
            signUp(filteredData);
            console.log(filteredData);
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: 'self-center mt-6 mb-10 w-[87%]',
              placeholder: 'Criar conta',
            }}
            columns={column}
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
