import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Button } from '../../../../components/Button';
import UserIcon from '../../../../assets/UserIcon.png';
import api from '../../../../services/axios';
import InformacaoUsuarioPodologo from '../../../../components/InformacaoUsuarioPodologo';

export default function InfoConsultaRealizada({ route, navigation }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [dadosSolicitacao, setDadosSolicitacao] = useState({});
  const [requestError, setRequestError] = useState();

  const data = dadosSolicitacao.lastUpdate ? new Date(dadosSolicitacao.lastUpdate).toLocaleDateString("pt-BR"): "Data desconhecida";

  const buscarDadosSolicitacao = async () => {
    try {
        const response = await api.get(`/appointment/consulta/${route.params.idSolicitacao}`);
        setDadosSolicitacao(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar a consulta:', error);
        setRequestError(error);
        setIsLoading(false);
      }
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
      <ScrollView className='flex space-y-4 px-5'>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Consultado por
        </Text>
        <InformacaoUsuarioPodologo 
          nome={dadosSolicitacao.doctor_name} 
          celular={dadosSolicitacao.doctor.phone_number}
          navigation={navigation}
          userId={dadosSolicitacao.doctor.user_id}
          consultaConcluida
        />
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='self-center text-[16px] text-azul'>
          Concluida em {data}
        </Text>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Observações
        </Text>
        <Text className='text-texto_cinza_claro'>
          {dadosSolicitacao.obs}
        </Text>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações médicas
        </Text>
        <Button placeholder='Ver ficha de anamnese' className='w-full'></Button>
      </ScrollView>
    </SafeAreaView>
  );
}
