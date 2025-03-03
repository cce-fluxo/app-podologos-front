import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../../components/Header';
import { Button } from '../../../../components/Button';
import api from '../../../../services/axios';

export default function InfoConsulta({ route, navigation }: any) {
    const [isLoading, setIsLoading] = useState(true);
    const [dadosSolicitacao, setDadosSolicitacao] = useState({});
    const [requestError, setRequestError] = useState();

    console.log('parametros!', route.params);

    const buscarDadosSolicitacao = async () => {
        try {
            const response = await api.get(`/appointment/consulta/${route.params.idSolicitacao}`);
            setDadosSolicitacao(response.data);
            console.log(response.data);
            setIsLoading(false);
          } catch (error) {
            console.error('Erro ao buscar consultas:', error);
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
        <Text className='text-[16px] text-azul'>
          Aguardando a solicitação ser aceita por algum profissional
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
