import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Solicitacoes from '../../../../components/Solicitacoes';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../../../context/AuthContext';

function Home() {
  const { signed, user } = useContext(AuthContext);
  const navigation = useNavigation();

  console.log('Estado signed mudou (HomeP):', signed);

  {
    !!user.doctor_id
      ? console.log('Usuário é um podólogo (Home)')
      : console.log('Usuário é um paciente (Home)');
  }

  return (
    <SafeAreaView className='flex w-screen flex-1 items-center space-y-10 bg-white'>
      <View className='ml-10 mt-4 w-full justify-center'>
        <Text className='text-[25px] text-azul_escuro'>Bem vindo,</Text>
        <Text className='text-[25px] text-azul_escuro'>Luiz</Text>
      </View>

      <Text className='text-[25px] font-semibold text-[#46555A]'>
        Solicitações
      </Text>

      <ScrollView className=''>
        <View className='flex pb-6'>
          <Solicitacoes
            onPress={() => navigation.navigate('InfoSolicitacaoConsulta')}
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

export default Home;
