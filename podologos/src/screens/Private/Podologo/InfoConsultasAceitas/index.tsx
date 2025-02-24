import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Header from '../../../../components/Header';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import FotoPe from '../../../../assets/FotoPe.png';
import UserIcon from '../../../../assets/UserIcon.png';
import InformacaoUsuario from '../../../../components/InformacaoUsuario';
import ModalSimNao from '../../../../components/PopUps/ModalSimNao';
import api from '../../../../services/axios';

function InfoConsultasAceitas({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMarcarRealizada, setIsLoadingMarcarRealizada] = useState(true);
  const [dadosConsulta, setDadosConsulta] = useState({});
  const [requestError, setRequestError] = useState();
  const [requestErrorMarcarRealizada, setRequestErrorMarcarRealizada] = useState();

  const data = dadosConsulta.CreatedAt ? new Date(dadosConsulta.CreatedAt).toLocaleDateString("pt-BR"): "Data desconhecida";

  async function onYesModal() {
    await marcarRealizadaConsulta();
    navigation.goBack();
    // Colocar um modal de consulta realizada com sucesso, depois?
  }
  function onNoModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }

  const buscarDadosSolicitacao = async () => {
    setIsLoading(true);
      try {
          const response = await api.get(`/appointment/consulta/${route.params.idConsulta}`);
          setDadosConsulta(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao buscar consultas:', error);
          setRequestError(error);
        }
        setIsLoading(false);
  };

  const marcarRealizadaConsulta = async () => {
    setIsLoadingMarcarRealizada(true);
    try {
        const response = await api.patch(`/appointment/finalizar-consulta/${route.params.idConsulta}`);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
        setRequestErrorMarcarRealizada(error);
      }
    setIsLoadingMarcarRealizada(false);
};

  useEffect(() => {
      buscarDadosSolicitacao();
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
              <Text className='m-auto text-[16px] text-azul'>Erro ao obter dados da consulta.</Text>
          </SafeAreaView>
      );
  }

  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <ScrollView className='flex space-y-4 px-5'>
        <Image
          source={FotoPe}
          alt=''
          className='self-center rounded-2xl'
        ></Image>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações do paciente
        </Text>
        <InformacaoUsuario 
          nome={dadosConsulta.patient_name} 
          celular={dadosConsulta.patient_phone_number} 
          cep={dadosConsulta.patient_cep}
          navigation={navigation}
          userId={dadosConsulta.user_id}
        />
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='self-center text-[16px] text-azul'>
          Aceita em {data}
        </Text>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações médicas
        </Text>
        <Button
          placeholder='Ver ficha de anamnese'
          className='w-full self-center border-[1px] border-azul bg-branco'
          text='text-azul'
        ></Button>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Observações
        </Text>
        <Text className='mb-8 text-texto_cinza_claro'>
          {dadosConsulta.obs ? dadosConsulta.obs : "Sem observações."}
        </Text>
        <Button
          onPress={openModal}
          placeholder='Marcar como realizada'
          className='w-full self-center'
        />
        <Button
          placeholder='Voltar'
          className='mb-8 w-full self-center border-[1px] border-azul bg-branco'
          text='text-azul'
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
      <ModalSimNao
        modalVisible={modalVisible}
        mensagem='Marcar essa consulta como realizada?'
        onNoClick={onNoModal}
        onYesClick={onYesModal}
        loading={isLoadingMarcarRealizada}
        erro={requestErrorMarcarRealizada}
      />
    </SafeAreaView>
  );
}

export default InfoConsultasAceitas;
