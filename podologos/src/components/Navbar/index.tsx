/* import { useNavigation } from "@react-navigation/native"; */

import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  return (
    <View className='flex h-20 w-full flex-row items-stretch rounded-t-xl shadow-sm shadow-black'>
      <TouchableOpacity className='flex h-20 flex-1'>
        <View className='flex flex-1 items-center justify-center'>
          <Entypo name='home' size={20} color={'#2087ED'} />

          <Text className='text-[15px] font-semibold text-azul'>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className='flex h-20 flex-1'>
        <View className='flex flex-1 items-center justify-center'>
          <FontAwesome name='plus-square-o' size={20} color={'#2087ED'} />

          <Text className='text-[15px] font-semibold text-azul'>Consultas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className='flex h-20 flex-1'>
        <View className='flex flex-1 items-center justify-center'>
          <AntDesign name='hearto' size={20} color={'#2087ED'} />
          <Text className='text-[15px] font-semibold text-azul'>Perfil</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
