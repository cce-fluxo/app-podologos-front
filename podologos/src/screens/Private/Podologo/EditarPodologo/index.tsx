import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { Button } from '../../../../components/Button';
import Header from '../../../../components/Header';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Input from '../../../../components/FormData/InputForm';
import { FormData } from '../../../../components/FormData/Index';
import { useState } from 'react';

export default function EditarPodologo() {
  const [data, setData] = useState({
    foto: '',
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cep: '',
    formacao: '',
    instituicao: '',
    anoConclusao: '',
    tipoFormacao: '',
  });

  const onSubmit = (data: any) => {};

  const column = [
    {
      name: 'nome',
      texto: 'Nome',
      placeholder: 'João',
      component: Input,
    },
    {
      name: 'sobrenome',
      texto: 'Sobrenome',
      placeholder: 'de Oliveira',
      component: Input,
    },
    {
      name: 'email',
      texto: 'Email',
      placeholder: 'giovannisouza@gmail.com',
      component: Input,
    },
    {
      name: 'telefone',
      texto: 'Telefone',
      placeholder: '(21) 12345-6789',
      component: Input,
    },
    { name: 'cep', texto: 'CEP', placeholder: '12345-678', component: Input },
    {
      name: 'formacao',
      texto: 'Formação',
      placeholder: 'Podologia',
      component: Input,
    },
    {
      name: 'instituicao',
      texto: 'Instituição',
      placeholder: 'UFRJ',
      component: Input,
    },
    {
      name: 'anoConclusao',
      texto: 'Ano de conclusão',
      placeholder: '2022',
      component: Input,
    },
    {
      name: 'tipoFormacao',
      placeholder: 'Superior',
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

        <FormData.Root
          onSubmit={(data) => {
            console.log('Dados recebidos para salvar:', data);
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
