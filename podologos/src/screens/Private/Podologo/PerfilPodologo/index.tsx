import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Header from '../../../../components/Header';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import Avaliacao from '../../../../components/Avaliacao';
import { useNavigation } from '@react-navigation/native';
import ModalSimNao from '../../../../components/PopUps/ModalSimNao';
import AuthContext from '../../../../context/AuthContext';
import api from '../../../../services/axios';

function PerfilPodologo({navigation}) {
  const { signOut } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalSair, setModalSair] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dadosUsuario, setDadosUsuario] = useState({});
  const [requestError, setRequestError] = useState();

  function closeModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }

  function closeSairModal() {
    setModalSair(false);
  }
  function openSairModal() {
    setModalSair(true);
  }

  const buscarDadosUsuario = async () => {
    setIsLoading(true);
      try {
          const response = await api.get(`/user/`);
          setDadosUsuario(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao buscar o Usuario:', error);
          setRequestError(error);
        }
      setIsLoading(false);
  };

  useEffect(() => {
      buscarDadosUsuario();
    }, []);

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
    <SafeAreaView className='flex w-full bg-white'>
      <ScrollView>
        <View className='flex items-center justify-center pt-4'>
          <Image className='' source={PerfilImage}></Image>
          <View className='mt-3 flex flex-row items-center justify-center space-x-1 rounded-md bg-zinc-100 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>{dadosUsuario.avg.rating}</Text>
          </View>
        </View>

        <View className='ml-6 mt-10'>
          <ProfileInfo label='Nome' text={dadosUsuario.first_name}></ProfileInfo>
          <ProfileInfo label='Sobrenome' text={dadosUsuario.last_name}></ProfileInfo>
          <ProfileInfo
            label='Email'
            text={dadosUsuario.email}
          ></ProfileInfo>
          <ProfileInfo label='Telefone' text={dadosUsuario.phone_number}></ProfileInfo>
          <ProfileInfo label='Cep' text={dadosUsuario.cep}></ProfileInfo>
          <ProfileInfo
            retornavel={true}
            label='Formação'
            text={dadosUsuario.doctor.institution}
            ensino={dadosUsuario.doctor.degree_type}
            formacao={dadosUsuario.doctor.degree_year}
          ></ProfileInfo>
        </View>
        <View className='mt-7 flex w-full items-center space-y-4'>
          <Button
            onPress={() => navigation.navigate('EditarPodologo', {dadosUsuario: dadosUsuario})}
            text='text-branco text-[16px]'
            placeholder='Editar perfil'
          ></Button>
          <Button
            className='border-2 border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Sair'
            onPress={openSairModal}
          />
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
          {/* {Array.from({ length: 5 }).map((_, i) => (
            <Avaliacao key={i}></Avaliacao>
          ))} */}
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
        modalVisible={modalVisible}
        mensagem='Tem certeza que deseja excluir sua conta?'
        onNoClick={closeModal}
      />
      <ModalSimNao
        onYesClick={signOut}
        modalVisible={modalSair}
        mensagem='Tem certeza que deseja sair?'
        onNoClick={closeSairModal}
      />
    </SafeAreaView>
  );
}

export default PerfilPodologo;
