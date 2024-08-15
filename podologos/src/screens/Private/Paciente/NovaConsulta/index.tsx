import { SafeAreaView, Text, View } from 'react-native';
import Header from '../../../../components/Header';
import { Button } from '../../../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Input from '../../../../components/Inputs';

export default function NovaConsulta() {
  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <View className='flex h-full justify-between px-5'>
        <View className='flex space-y-4'>
          <Button
            className='mt-8 w-full self-center border-[1px] border-azul bg-branco'
            text='text-azul'
            placeholder='Adicionar foto de perfil'
          >
            <MaterialIcons name='add' size={20} color='#2087ED' />
          </Button>
          <Text className='text-[23px] font-semibold text-[#46555A]'>
            Observações
          </Text>
          <Input className='w-full' placeholder='Lorem Ipsum'></Input>
          <Text className='text-[23px] font-semibold text-[#46555A]'>
            Formulário médico
          </Text>
          <Button
            className='w-full self-center border-[1px] border-azul bg-branco'
            text='text-azul'
            placeholder='Editar ficha de anamnese'
          ></Button>
        </View>

        <Button className='mb-8 w-full' placeholder='Enviar'></Button>
      </View>
    </SafeAreaView>
  );
}
