import React, { View, TouchableOpacity, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  text?: string;
}

export default function Header({ text }: Props) {
  const navigation = useNavigation();
  return (
    <View className='mb-2 mt-2 flex w-full flex-row items-center justify-between p-8 px-4'>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className='w-[20px]'
      >
        <Feather name='arrow-left' color={'#0A284D'} size={25} />
      </TouchableOpacity>
      <Text className='text-[24px] text-azul_escuro'>{text}</Text>
      <View className='w-[20px]'></View>
    </View>
  );
}
