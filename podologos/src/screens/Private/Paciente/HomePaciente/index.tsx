import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import HomePacienteImage from '../../../../assets/HomePacienteImage.png';
import { Button } from '../../../../components/Button';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../../context/AuthContext';

export default function HomePaciente({ navigation }) {
  const { signed, user } = useContext(AuthContext);
  useEffect(() => {
    console.log('Estado signed mudou (Home):', signed);
  }, [signed]);
  console.log('testando o tipo de cliente:', !!user.doctor_id);

  return (
    <SafeAreaView className='flex h-full w-full'>
      <ImageBackground
        source={HomePacienteImage}
        alt=''
        className='flex h-full w-full items-center justify-end space-y-10'
      >
        <View className='w-[90%] justify-center'>
          <Text className='text-[25px] text-azul_escuro'>Bem vindo,</Text>
          <Text className='text-[25px] font-bold text-azul_escuro'>
            {user.first_name}
          </Text>
        </View>
        <Text className='w-[90%] text-[16px] text-branco'>
          Encontre podólogos experientes perto de você para proporcionar o
          cuidado que seus pés merecem.
        </Text>
        <Button
          placeholder='Nova consulta'
          className='mb-8'
          onPress={() => navigation.navigate('NovaConsulta')}
        ></Button>
      </ImageBackground>
    </SafeAreaView>
  );
}
