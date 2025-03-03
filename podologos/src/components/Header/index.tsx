import React, { View, TouchableOpacity, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

interface Props {
  text?: string;
  bemVindo?: boolean;
}

export default function Header({ text, bemVindo = false }: Props) {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  if(bemVindo) {
    return (
      <View className='ml-10 mt-8 w-full justify-center'>
        <Text className='text-[25px] text-azul_escuro'>Bem vindo,</Text>
        <Text className='text-[25px] text-azul_escuro'>{user.first_name}</Text>
      </View>
    );
  }

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
