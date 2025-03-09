import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import Avaliacao from '../../../../components/Avaliacao';
import ModalSimNao from '../../../../components/PopUps/ModalSimNao';
import api from '../../../../services/axios';
import AuthContext from '../../../../context/AuthContext';

function PerfilPaciente({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalSair, setModalSair] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [requestError, setRequestError] = useState();

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

  const buscarDadosUsuario = async () => {
    setIsLoading(true);
      try {
          const response = await api.get(`/user/`);
          setDadosUsuario(response.data);
          setRequestError(null);
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao buscar o Usuario:', error);
          setRequestError(error);
        }
      setIsLoading(false);
  };

  useEffect(() => {
      const atualizarDados = navigation.addListener('focus', () => {
        console.log("buscando dados do usuário");
        buscarDadosUsuario();
        // The screen is focused
        // Call any action
      });
  
      // Return the function to unsubscribe from the event so it gets removed on unmount
      return atualizarDados;
    }, [navigation]);

  if(isLoading) {
      return (
      <SafeAreaView className='flex h-full w-full bg-branco'>
          <ActivityIndicator className='m-auto' size={80} color="#2087ED" /> 
      </SafeAreaView>
      );
  }

  if (requestError) {
    return(
        <SafeAreaView className='flex h-full w-full bg-branco'>
          <View className='w-full my-auto flex flex-col items-center space-y-4'>
            <Text className='text-[16px] text-azul'>Erro ao obter dados do usuário.</Text>
            <Button
              className='border-2 border-azul bg-white'
              text='text-azul text-[16px]'
              placeholder='Recarregar'
              onPress={buscarDadosUsuario}
            />
            <Button
              className='border-2 border-azul bg-white'
              text='text-azul text-[16px]'
              placeholder='Sair'
              onPress={openSairModal}
            />
          </View>
          <ModalSimNao
            onYesClick={signOut}
            modalVisible={modalSair}
            mensagem='Tem certeza que deseja sair?'
            onNoClick={closeSairModal}
          />
        </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className='flex w-full bg-branco'>
      <ScrollView className=''>
        <View className='flex items-center justify-center pt-5'>
          <Image className='h-24 w-24 rounded-full' source={dadosUsuario.profile_picture ? { uri: dadosUsuario.profile_picture } : PerfilImage} />
          <View className='mt-3 flex flex-row items-center justify-center space-x-2 rounded-md bg-zinc-100 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>{dadosUsuario.avg.rating}</Text>
          </View>
        </View>
        <View className='ml-6 mt-10'>
          <ProfileInfo label='Nome' text={dadosUsuario.first_name}></ProfileInfo>
          <ProfileInfo label='Sobrenome' text={dadosUsuario.last_name}></ProfileInfo>
          <ProfileInfo label='Telefone' text={dadosUsuario.phone_number}></ProfileInfo>
          <ProfileInfo label='Cep' text={dadosUsuario.cep}></ProfileInfo>
          <ProfileInfo label='Email' text={dadosUsuario.email}></ProfileInfo>
        </View>
        <View className='mt-7 flex w-full items-center space-y-4'>
          <Button
            placeholder='Editar perfil '
            onPress={() => navigation.navigate('EditarPaciente',
               {
                profile_picture: dadosUsuario.profile_picture, 
                avg: dadosUsuario.avg.rating }
              )}
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
          {dadosUsuario.user_reviews 
          ?
          dadosUsuario.user_reviews.map((item, index) => (
            <Avaliacao key={index} nome={item.first_name + " " + item.last_name} comentario={item.comment} nota={item.rating} />
          ))
          :
          <Text className='text-center text-gray-500'>
            Nenhuma avaliação encontrada.
          </Text>
          }
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
      />
    </SafeAreaView>
  );
}

export default PerfilPaciente;
