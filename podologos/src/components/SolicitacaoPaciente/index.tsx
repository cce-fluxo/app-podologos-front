import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

function SolicitacaoPaciente({ consulta }) {
  return (
    <TouchableOpacity className='mt-4 flex justify-center space-y-4 rounded-2xl bg-branco p-4 shadow-md'
    style={{
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 4 }, // Sombra apenas embaixo
      shadowOpacity: 0.2, // Opacidade da sombra
      shadowRadius: 3, // Difusão da sombra
      elevation: 3, // Para suportar Android
    }}>
      <View className='flex flex-row items-center justify-between'>
        <Text className='text-[16px]'>
          Você fez uma solicitação em:{'  '}
          {new Date(consulta.CreatedAt).toLocaleDateString()}
        </Text>
        <Feather name='info' size={18} color='#2087ED' />
      </View>

      <View className='flex flex-row justify-between'>
        <View className='flex flex-row items-center space-x-1'>
          <Feather name='clock' size={16} color='#2087ED' />
          <Text className='text-[16px] text-azul'>{consulta.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SolicitacaoPaciente;
