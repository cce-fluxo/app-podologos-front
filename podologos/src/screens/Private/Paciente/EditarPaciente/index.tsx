import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { Button } from '../../../../components/Button';
import Header from '../../../../components/Header';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Input from '../../../../components/Inputs';
import { FormData } from '../../../../components/FormData/Index';
import { useState } from 'react';

export default function EditarPaciente() {
  const [data, setData] = useState({
    foto: '',
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cep: '',
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
  ];
  return (
    <SafeAreaView className='flex w-full bg-branco'>
      <Header text='Perfil'></Header>
      <ScrollView>
        <View className='flex items-center justify-center'>
          <Image className='' source={PerfilImage}></Image>
          <View className='mt-3 flex flex-row items-center justify-center rounded-md bg-zinc-200 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>4.75</Text>
          </View>
        </View>
        <Button
          className='mt-8 self-center border-[1px] border-azul bg-branco'
          placeholder='Editar ficha de anamnese'
          text='text-azul'
        ></Button>

        <FormData.Root onSubmit={onSubmit}>
          <FormData.Form columns={column} id='formQuestion'>
            <Button className='mt-2 self-center' placeholder='Salvar'></Button>
            <Button
              className='mb-20 mt-2 self-center border-[1px] border-azul bg-branco'
              placeholder='Cancelar'
              text='text-azul'
            ></Button>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
