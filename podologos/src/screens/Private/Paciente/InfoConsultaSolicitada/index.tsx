import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../../components/Header';
import { Button } from '../../../../components/Button';

export default function InfoConsultaSolicitada() {
  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <Header text='Informações'></Header>
      <ScrollView className='flex space-y-4 px-5'>
        <Text className='text-[16px] text-azul'>
          Aguardando a solicitação ser aceita por algum profissional
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
