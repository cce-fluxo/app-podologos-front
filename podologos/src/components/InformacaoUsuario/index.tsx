import { Image, Text, TouchableOpacity, View } from 'react-native';
import UserIcon from '../../assets/UserIcon.png';
import { useNavigation } from '@react-navigation/native';

export default function InformacaoUsuario() {
  const navigation = useNavigation();

  return (
    <View className='mt-4 flex flex-row space-x-2'>
      <Image source={UserIcon}></Image>
      <View className='flex justify-evenly'>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          João de Oliveira
        </Text>
        <Text className='text-texto_cinza_claro'>(21) 12345-6789</Text>
        <Text className='text-texto_cinza_claro'>00000-000</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PerfilDoPaciente');
          }}
        >
          <Text className='text-azul underline'>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
