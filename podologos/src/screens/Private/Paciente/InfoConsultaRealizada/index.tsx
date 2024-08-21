import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Header from '../../../../components/Header';
import { Button } from '../../../../components/Button';
import FotoPe from '../../../../assets/FotoPe.png';
import UserIcon from '../../../../assets/UserIcon.png';
import InformacaoUsuario from '../../../../components/InformacaoUsuario';

export default function InfoConsultaRealizada() {
  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <Header text='Informações'></Header>
      <ScrollView className='flex space-y-4 px-5'>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Consultado por
        </Text>
        <View className='flex flex-row space-x-2'>
          <Image source={UserIcon}></Image>
          <View className='flex justify-center space-y-1'>
            <Text className='text-[18px] font-semibold text-texto_cinza'>
              João de Oliveira
            </Text>
            <Text className='text-texto_cinza_claro'>(21) 12345-6789</Text>
            <Text className='text-azul underline'>Ver mais</Text>
          </View>
        </View>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='self-center text-[16px] text-azul'>
          Concluida em 01/02/2024
        </Text>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Observações
        </Text>
        <Text className='text-texto_cinza_claro'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          officia expedita quisquam unde nihil placeat repellendus. Recusandae
          fuga inventore blanditiis maxime explicabo excepturi corporis, natus
          repellat, eveniet perspiciatis dicta similique?
        </Text>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações médicas
        </Text>
        <Button placeholder='Ver ficha de anamnese' className='w-full'></Button>
      </ScrollView>
    </SafeAreaView>
  );
}
