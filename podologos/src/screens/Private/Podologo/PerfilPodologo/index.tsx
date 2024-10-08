import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Header from '../../../../components/Header';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import Avaliacao from '../../../../components/Avaliacao';
import { useNavigation } from '@react-navigation/native';
import ModalSimNao from '../../../../components/PopUps/ModalSimNao';

function PerfilPodologo() {
  const [modalVisible, setModalVisible] = React.useState(false);

  function closeModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex w-full bg-white'>
      <ScrollView>
        <View className='flex items-center justify-center pt-4'>
          <Image className='' source={PerfilImage}></Image>
          <View className='mt-3 flex flex-row items-center justify-center space-x-1 rounded-md bg-zinc-100 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>4.75</Text>
          </View>
        </View>

        <View className='ml-6 mt-10'>
          <ProfileInfo label='Nome' text='Giovanni'></ProfileInfo>
          <ProfileInfo label='Sobrenome' text='Souza'></ProfileInfo>
          <ProfileInfo
            label='Email'
            text='giovannisouza@gmail.com'
          ></ProfileInfo>
          <ProfileInfo label='Telefone' text='(21) 12345-6789'></ProfileInfo>
          <ProfileInfo label='Cep' text='12345-678'></ProfileInfo>
          <ProfileInfo
            retornavel={true}
            label='Formação'
            text='Podologia - UFRJ'
            ensino='Ensino Superior'
            formacao='2022'
          ></ProfileInfo>
        </View>
        <View className='mt-7 flex w-full items-center space-y-4'>
          <Button
            onPress={() => navigation.navigate('EditarPodologo')}
            text='text-branco text-[16px]'
            placeholder='Editar perfil'
          ></Button>
          <Button
            className='border-2 border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Sair'
          ></Button>
          <Button
            onPress={openModal}
            className='border-2 border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Excluir conta'
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
        modalVisible={modalVisible}
        mensagem='Tem certeza que deseja excluir sua conta?'
        onNoClick={closeModal}
      ></ModalSimNao>
    </SafeAreaView>
  );
}

export default PerfilPodologo;
