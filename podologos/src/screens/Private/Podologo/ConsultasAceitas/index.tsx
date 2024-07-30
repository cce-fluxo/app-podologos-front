import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Solicitacoes from '../../../../components/Solicitacoes';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../../components/Header';

function ConsultasAceitas() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex w-screen flex-1 items-center space-y-6 bg-white'>
      <View className='flex w-full flex-row justify-around'>
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

      <ScrollView className=''>
        <Solicitacoes
          onPress={() => navigation.navigate('InfoConsultasAceitas')}
        />
        <Solicitacoes />
        <Solicitacoes />
        <Solicitacoes />
        <Solicitacoes />
        <Solicitacoes />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ConsultasAceitas;
