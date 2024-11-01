import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import SolicitacaoPaciente from '../../../../components/SolicitacaoPaciente';
import api from '../../../../services/axios';
import AuthContext from '../../../../context/AuthContext';

export default function MinhasSolicitacoes() {
  const { user } = useContext(AuthContext);
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConsultas() {
      try {
        const response = await api.get('/appointment/consultas-usuario');
        setConsultas(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
        setLoading(false);
      }
    }

    fetchConsultas();
  }, []);

  return (
    <SafeAreaView className='flex w-screen flex-1 items-center space-y-8 bg-branco'>
      <View className='flex w-screen items-center space-y-8 px-5'>
        <View className='mt-4 w-full justify-center'>
          <Text className='text-[25px] text-azul_escuro'>Bem vindo,</Text>
          <Text className='text-[25px] text-azul_escuro'>
            {user.first_name}
          </Text>
        </View>

        <Text className='text-[25px] font-semibold text-[#46555A]'>
          Minhas solicitações
        </Text>
      </View>

      <ScrollView className='flex w-full px-5'>
        {loading ? (
          <ActivityIndicator size='large' color='#2087ED' /> // Indicador de carregamento
        ) : consultas.length > 0 ? (
          consultas.map((consulta) => (
            <SolicitacaoPaciente
              key={consulta.appointment_id}
              consulta={consulta}
            />
          ))
        ) : (
          <Text className='text-center text-gray-500'>
            Nenhuma solicitação encontrada.
          </Text>
        )}
        <View className='mb-8'></View>
      </ScrollView>
    </SafeAreaView>
  );
}
