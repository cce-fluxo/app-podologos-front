import React, { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import Avaliacao from '../../../../components/Avaliacao';
import ModalSimNao from '../../../../components/PopUps/ModalSimNao';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      return response.data;
    } catch (error) {
      console.log('Erro ao deletar usuário:', error);
    }
  }

  return (
    <SafeAreaView className='flex w-full bg-branco'>
      <ScrollView className='flex space-y-8 px-5 pt-5'>
        <View className='flex items-center justify-center'>
          <Image className='' source={PerfilImage}></Image>
          <View className='mt-3 flex flex-row items-center justify-center space-x-2 rounded-md bg-cinza p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>4.75</Text>
          </View>
        </View>
        <Text className='self-center text-[14px] font-semibold text-azul underline'>
          Ver anamnese
        </Text>
        <View className='flex space-y-4'>
          <ProfileInfo label='Nome' text={user.nome}></ProfileInfo>
          <ProfileInfo label='Sobrenome' text={user.sobrenome}></ProfileInfo>
          <ProfileInfo label='Email' text={user.email}></ProfileInfo>
          <ProfileInfo label='Telefone' text={user.telefone}></ProfileInfo>
          <ProfileInfo label='Cep' text={user.cep}></ProfileInfo>
        </View>
        <View className='flex w-full items-center space-y-4'>
          <Button
            className='w-full'
            placeholder='Editar perfil '
            onPress={() => navigation.navigate('EditarPaciente')}
          ></Button>
          <Button
            className='w-full border-[1px] border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Sair'
            onPress={openSairModal}
          ></Button>
          <Button
            className='w-full border-[1px] border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Excluir conta'
            onPress={openDeleteModal}
          ></Button>
        </View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Avaliações
        </Text>
        <View className='mb-24 flex w-full space-y-4'>
          {Array.from({ length: 10 }).map((_, i) => (
            <View
              key={i}
              className='flex w-full space-y-3 rounded-2xl bg-branco p-4 shadow-md shadow-black'
            >
              <View className='flex flex-row items-center justify-between'>
                <Text className='text-[18px] font-semibold text-texto_cinza'>
                  Larissa Oliveira
                </Text>
                <View className='flex flex-row items-center space-x-1 rounded-md bg-cinza p-1'>
                  <Entypo name='star' size={12} color='black' />
                  <Text className='font-semibold'>4.75</Text>
                </View>
              </View>
              <Text className='text-texto_cinza_claro'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium doloremque porro obcaecati suscipit et sunt rem
                quasi! Sit perferendis nisi quia. Cum, veritatis. Ea praesentium
                nulla distinctio quos ullam illum.
              </Text>
            </View>
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
