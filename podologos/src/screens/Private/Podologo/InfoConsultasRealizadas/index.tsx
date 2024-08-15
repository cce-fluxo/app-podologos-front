import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Header from '../../../../components/Header';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import FotoPe from '../../../../assets/FotoPe.png';
import UserIcon from '../../../../assets/UserIcon.png';
import InformacaoUsuario from '../../../../components/InformacaoUsuario';

function InfoConsultasRealizadas() {
  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <ScrollView className='flex space-y-4 px-5'>
        <Image
          source={FotoPe}
          alt=''
          className='self-center rounded-2xl'
        ></Image>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações do paciente
        </Text>
        <InformacaoUsuario />
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='self-center text-[16px] text-azul'>
          Realizada em 01/02/2024
        </Text>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações médicas
        </Text>
        <Button
          placeholder='Ver ficha de anamnese'
          className='w-full self-center border-[1px] border-azul bg-branco'
          text='text-azul'
        ></Button>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Observações
        </Text>
        <Text className='mb-8 text-texto_cinza_claro'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          officia expedita quisquam unde nihil placeat repellendus. Recusandae
          fuga inventore blanditiis maxime explicabo excepturi corporis, natus
          repellat, eveniet perspiciatis dicta similique?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default InfoConsultasRealizadas;
