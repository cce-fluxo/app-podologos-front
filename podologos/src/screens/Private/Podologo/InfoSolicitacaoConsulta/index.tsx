import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Header from '../../../../components/Header';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import FotoPe from '../../../../assets/FotoPe.png';
import UserIcon from '../../../../assets/UserIcon.png';
import InformacaoUsuario from '../../../../components/InformacaoUsuario';
import { useNavigation } from '@react-navigation/native';
import ModalOk from '../../../../components/PopUps/ModalOk';
import api from '../../../../services/axios';

function InfoSolicitacaoConsulta({ route, navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAceitar, setIsLoadingAceitar] = useState(true);
  const [dadosSolicitacao, setDadosSolicitacao] = useState({});
  const [requestError, setRequestError] = useState();
  const [requestErrorAceitar, setRequestErrorAceitar] = useState();

  function closeModal() {
    setModalVisible(false);
    navigation.goBack();
  }
  function openModal() {
    aceitarConsulta();
    setModalVisible(true);
  }

  console.log('parametros!', route.params);

  const buscarDadosSolicitacao = async () => {
    setIsLoading(true);
      try {
          const response = await api.get(`/appointment/consulta/${route.params.idSolicitacao}`);
          setDadosSolicitacao(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao buscar consultas:', error);
          setRequestError(error);
        }
        setIsLoading(false);
  };

  const aceitarConsulta = async () => {
    setIsLoadingAceitar(true);
    try {
        const response = await api.patch(`/appointment/aceitar-consulta/${route.params.idSolicitacao}`);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
        setRequestErrorAceitar(error);
      }
    setIsLoadingAceitar(false);
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
              <Text className='m-auto text-[16px] text-azul'>Erro ao obter dados da solicitação.</Text>
          </SafeAreaView>
      );
  }

  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <ScrollView className='flex space-y-4 px-5 pt-5'>
        <Image
          source={FotoPe}
          alt=''
          className='self-center rounded-2xl'
        ></Image>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações do paciente
        </Text>
        <InformacaoUsuario 
          nome={dadosSolicitacao.patient_name} 
          celular={dadosSolicitacao.patient_phone_number} 
          cep={dadosSolicitacao.patient_cep} 
        />
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
        <Text className='text-texto_cinza_claro'>
          {dadosSolicitacao.obs ? dadosSolicitacao.obs : "Sem observações."}
        </Text>
        <Button
          onPress={openModal}
          placeholder='Aceitar e enviar contato'
          className='w-full self-center'
        />
        <Button
          onPress={() => navigation.goBack()}
          placeholder='Voltar'
          className='mb-8 w-full self-center border-[1px] border-azul bg-branco'
          text='text-azul'
        />
      </ScrollView>
      <ModalOk
        modalVisible={modalVisible}
        mensagem='Você aceitou essa consulta!'
        onOkClick={closeModal}
        loading={isLoadingAceitar}
        erro={requestErrorAceitar}
      />
    </SafeAreaView>
  );
}

export default InfoSolicitacaoConsulta;
