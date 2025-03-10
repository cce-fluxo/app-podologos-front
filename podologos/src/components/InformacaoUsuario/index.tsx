import { Image, Text, TouchableOpacity, View } from 'react-native';
import UserIcon from '../../assets/UserIcon.png';
import { useNavigation } from '@react-navigation/native';

export default function InformacaoUsuario({nome = "Desconhecido", celular = "Não encontrado", cep = "Não encontrado", userId, navigation, consultaConcluida = false, image}) {
  return (
    <View className='mt-4 flex flex-row space-x-2'>
      <Image className='h-24 w-24 rounded-full' source={image ? { uri: image } : UserIcon} />
      <View className='flex justify-evenly'>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          {nome}
        </Text>
        <Text className='text-texto_cinza_claro'>{celular}</Text>
        <Text className='text-texto_cinza_claro'>{cep}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PerfilDoPaciente', { userId: userId, consultaConcluida });
          }}
        >
          <Text className='text-azul underline'>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
