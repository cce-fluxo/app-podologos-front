import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Solicitacoes from '../../../../components/Solicitacoes';
import Header from '../../../../components/Header';
import { useNavigation } from '@react-navigation/native';

function ConsultasRealizadas() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex w-screen flex-1 items-center space-y-6 bg-white'>
      <View className='flex w-full flex-row justify-around pt-6'>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ConsultasAceitas');
          }}
        >
          <Text className='text-[22px] font-semibold text-azul/40'>
            Aceitas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='border-b-4 border-azul'>
          <Text className='text-[22px] font-semibold text-azul'>
            Realizadas
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className=''>
        <View className='flex pb-6'>
          <Solicitacoes
            onPress={() => navigation.navigate('InfoConsultasRealizadas')}
          />
          <Solicitacoes />
          <Solicitacoes />
          <Solicitacoes />
          <Solicitacoes />
          <Solicitacoes />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ConsultasRealizadas;
