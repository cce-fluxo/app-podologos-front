import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '../../../components/Button';
import FundoLogin from '../../../assets/FundoLogin.png';
import { useNavigation } from '@react-navigation/native';

function PreLogin() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <ImageBackground resizeMode='cover' className='flex-1 w-full' source={FundoLogin}>
        <View className='flex h-full w-full items-center justify-around space-y-2'>
          <View></View>

          <Text className='max-w-[80%] text-[32px] font-bold text-branco'>
            O atendimento e conforto para os seus pés
          </Text>

          <View className='mb-10 flex w-full max-w-[87%] items-center space-y-2'>
            <Button
              className='mt-10 flex'
              text='text-branco text-[16px]'
              placeholder='Podólogo'
              onPress={() => {
                navigation.navigate('CadastroPodologo');
              }}
            ></Button>
            <Button
              className=' '
              text='text-branco text-[16px]'
              placeholder='Paciente'
              onPress={() => {
                navigation.navigate('CadastroPaciente');
              }}
            ></Button>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
            >
              <Text className='text-[15px] text-branco'>
                Já possuo cadastro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default PreLogin;
