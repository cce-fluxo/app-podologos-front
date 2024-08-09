import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type socilitacoesProps = {
  onPress?: any;
};
function Solicitacoes({ onPress }: socilitacoesProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='mt-4 flex h-24 justify-center space-y-4 rounded-2xl bg-white p-4 shadow-md'
    >
      <Text>João da Silva fez uma solicitação perto de você</Text>

      <View className='flex flex-row justify-between'>
        <View className='flex flex-row'>
          <EvilIcons name='location' size={24} color='black' />
          <Text>Tijuca</Text>
        </View>
        <Text>01/01/2024</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Solicitacoes;
