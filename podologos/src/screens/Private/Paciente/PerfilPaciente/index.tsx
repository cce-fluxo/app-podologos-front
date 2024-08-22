import React, { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import Avaliacao from '../../../../components/Avaliacao';
import ModalSimNao from '../../../../components/PopUps/ModalSimNao';
import api from '../../../../services/axios';
import AuthContext from '../../../../context/AuthContext';

function PerfilPaciente({ navigation }) {
  const { signOut, user } = useContext(AuthContext);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalSair, setModalSair] = useState(false);

  function closeDeleteModal() {
    setModalDelete(false);
  }
  function openDeleteModal() {
    setModalDelete(true);
  }

  function closeSairModal() {
    setModalSair(false);
  }
  function openSairModal() {
    setModalSair(true);
  }
  async function DeleteAccount() {
    try {
      const response = await api.delete('/user');
      console.log('Resposta da API:', response.data);
      signOut();
      return response.data;
    } catch (error) {
      console.log('Erro ao deletar usuário:', error);
    }
  }

  return (
    <SafeAreaView className='flex w-full bg-branco'>
      <ScrollView className=''>
        <View className='flex items-center justify-center pt-5'>
          <Image className='' source={PerfilImage}></Image>
          <View className='mt-3 flex flex-row items-center justify-center space-x-2 rounded-md bg-zinc-100 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>4.75</Text>
          </View>
        </View>
        <Text className='mt-4 self-center text-[14px] font-semibold text-azul underline'>
          Ver anamnese
        </Text>
        <View className='ml-6 mt-10'>
          <ProfileInfo label='Nome' text={user.first_name}></ProfileInfo>
          <ProfileInfo label='Sobrenome' text={user.last_name}></ProfileInfo>
          <ProfileInfo label='Email' text={user.email}></ProfileInfo>
          <ProfileInfo label='Telefone' text={user.phone_number}></ProfileInfo>
          <ProfileInfo label='Cep' text={user.cep}></ProfileInfo>
        </View>
        <View className='mt-7 flex w-full items-center space-y-4'>
          <Button
            placeholder='Editar perfil '
            onPress={() => navigation.navigate('EditarPaciente')}
          ></Button>
          <Button
            className='border-[1px] border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Sair'
            onPress={openSairModal}
          ></Button>
          <Button
            className='border-[1px] border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Excluir conta'
            onPress={openDeleteModal}
          ></Button>
        </View>
        <View className='mb-10 mt-10 flex w-full space-y-4'>
          <Text className='ml-6 text-[25px] font-semibold text-[#46555A]'>
            Avaliações:
          </Text>
        </View>
        <View className='mb-14 flex w-full space-y-4'>
          {Array.from({ length: 5 }).map((_, i) => (
            <Avaliacao key={i}></Avaliacao>
          ))}
        </View>
      </ScrollView>
      <ModalSimNao
        modalVisible={modalDelete}
        mensagem='Tem certeza que deseja excluir sua conta?'
        onNoClick={closeDeleteModal}
        onYesClick={DeleteAccount}
      ></ModalSimNao>
      <ModalSimNao
        onYesClick={signOut}
        modalVisible={modalSair}
        mensagem='Tem certeza que deseja sair?'
        onNoClick={closeSairModal}
      ></ModalSimNao>
    </SafeAreaView>
  );
}

export default PerfilPaciente;
