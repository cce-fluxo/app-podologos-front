import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Avaliacao() {
  return (
    <View className='flex w-full items-center justify-center'>
      <View className='mb-4 flex w-[90%] space-y-3 rounded-2xl bg-branco p-4 shadow-md shadow-black'>
        <View className='flex flex-row items-center justify-between'>
          <Text className='text-[18px] font-semibold text-texto_cinza'>
            Larissa Oliveira
          </Text>
          <View className='flex flex-row items-center space-x-1 rounded-md bg-cinza p-1'>
            <Entypo name='star' size={12} color='black' />
            <Text className='font-semibold'>4.75</Text>
          </View>
        </View>
        <Text className='text-texto_cinza_claro'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          doloremque porro obcaecati suscipit et sunt rem quasi! Sit perferendis
          nisi quia. Cum, veritatis. Ea praesentium nulla distinctio quos ullam
          illum.
        </Text>
      </View>
    </View>
  );
}
