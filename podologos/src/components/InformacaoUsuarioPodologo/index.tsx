import { Image, Text, TouchableOpacity, View } from 'react-native';
import UserIcon from '../../assets/UserIcon.png';
import { useNavigation } from '@react-navigation/native';

export default function InformacaoUsuarioPodologo({nome = "Desconhecido", celular = "Não encontrado", userId, navigation, consultaConcluida = false}) {
  return (
    <View className='flex flex-row space-x-2'>
        <Image source={UserIcon}></Image>
        <View className='flex justify-center space-y-1'>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
            {nome}
        </Text>
        <Text className='text-texto_cinza_claro'>{celular}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PerfilDoPodologo', { userId: userId, consultaConcluida });
          }}
        >
          <Text className='text-azul underline'>Ver mais</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
