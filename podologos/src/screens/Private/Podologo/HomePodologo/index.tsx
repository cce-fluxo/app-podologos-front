import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Solicitacoes from '../../../../components/Solicitacoes';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../../../context/AuthContext';
import Header from '../../../../components/Header';
import api from '../../../../services/axios';

function Home({ navigation }: any) {
  const { signed, user } = useContext(AuthContext);
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(user);
  console.log('Estado signed mudou (HomeP):', signed);

  {
    !!user.doctor_id
      ? console.log('Usuário é um podólogo (Home)')
      : console.log('Usuário é um paciente (Home)');
  }

  useEffect(() => {
    async function fetchConsultas() {
      try {
        const response = await api.get('/appointment/consultas-aceitaveis-medico');
        setConsultas(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
        setLoading(false);
      }
    }

    fetchConsultas();
  }, []);

  return (
    <SafeAreaView className='flex w-screen flex-1 items-center space-y-10 bg-white'>
      {/* <View className='ml-10 mt-8 w-full justify-center'>
        <Text className='text-[25px] text-azul_escuro'>Bem vindo,</Text>
        <Text className='text-[25px] text-azul_escuro'>{user.first_name}</Text>
      </View> */}
      <Header bemVindo />

      <Text className='text-[25px] font-semibold text-[#46555A]'>
        Solicitações
      </Text>

      <ScrollView className='flex w-[90%]'>
        <View className='flex pb-6 w-full'>
          {loading ? (
            <ActivityIndicator size='large' color='#2087ED' /> // Indicador de carregamento
          ) : consultas.length > 0 ? (
            consultas.map((consulta) => (
              <Solicitacoes
                key={consulta.appointment_id}
                consulta={consulta}
                onPress={() => {
                  navigation.navigate('InfoSolicitacaoConsulta', {
                    idSolicitacao: consulta.appointment_id,
                  });
                }}
              />
            ))
          ) : (
            <Text className='text-center text-gray-500'>
              Nenhuma solicitação encontrada.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
