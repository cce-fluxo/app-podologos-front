import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Solicitacoes from '../../../../components/Solicitacoes';
import api from '../../../../services/axios';

function ConsultasAceitas({navigation}) {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConsultas() {
      try {
        const response = await api.get('/appointment/consultas-ativas-medico');
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
    <SafeAreaView className='flex w-screen flex-1 items-center space-y-6 bg-white'>
      <View className='flex w-full flex-row justify-around pt-6'>
        <TouchableOpacity className='border-b-4 border-azul'>
          <Text className='vont-semibold text-[22px] text-azul'>Aceitas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ConsultasRealizadas');
          }}
        >
          <Text className='text-[22px] text-azul/40'>Realizadas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className='flex w-[90%]'>
        <View className='flex pb-6 w-full'>
        {loading ? (
          <ActivityIndicator size='large' color='#2087ED' /> // Indicador de carregamento
        ) : consultas.length > 0 ? (
          consultas.map((consulta) => (
            <Solicitacoes
              key={consulta.appointment_id}
              consulta={consulta}
              jaAceita
              onPress={() => {
                navigation.navigate('InfoConsultasAceitas', {
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
          {/* <Solicitacoes
            onPress={() => navigation.navigate('InfoConsultasAceitas')}
          />
          <Solicitacoes />
          <Solicitacoes />
          <Solicitacoes />
          <Solicitacoes />
          <Solicitacoes /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ConsultasAceitas;
