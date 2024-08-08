import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FormData } from '../../../components/FormData/Index';
import { useState } from 'react';
import Input from '../../../components/FormData/InputForm';
import { Button } from '../../../components/Button';
import Header from '../../../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { CadastroSchema } from '../../../components/Schemas';
import TermosCondicoes from '../../../components/TermosCondicoes';

export default function CadastroPodologo() {
  const [isChecked, setIsChecked] = useState(false);

  const [data, setData] = useState({
    foto: '',
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cep: '',
    senha: '',
    confirmarSenha: '',
  });

  const column2 = [
    {
      name: 'first_name',
      placeholder: 'Nome*',
      component: Input,
    },
    { name: 'last_name', placeholder: 'Sobrenome*', component: Input },
    { name: 'email', placeholder: 'Email*', component: Input },
    { name: 'phone_number', placeholder: 'Telefone*', component: Input },
    { name: 'cep', placeholder: 'CEP*', component: Input },
    { name: 'encrypted_password', placeholder: 'Senha*', component: Input },
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
          className='mb-4 mt-6 w-[87%] self-center border-[1px] border-azul bg-branco'
          text='text-azul'
          placeholder='Adicionar foto de perfil'
        >
          <MaterialIcons name='add' size={20} color='#2087ED' />
        </Button>
        <FormData.Root
          schema={CadastroSchema}
          initialValues={{
            profile_picture: '1',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            cep: '',
            encrypted_password: '',
          }}
          onSubmit={(data) => {
            {
            }
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: 'self-center mt-6 mb-10 w-[87%]',
              placeholder: 'Criar conta',
            }}
            columns={column2}
            id='formQuestion'
          >
            <Button
              className='mb-6 mt-2 w-[87%] self-center border-[1px] border-azul bg-branco'
              placeholder='Formação'
              text='text-azul'
            ></Button>
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
