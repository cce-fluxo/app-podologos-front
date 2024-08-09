import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from '../Button';

interface PopUpProps {
  texto: string;
  onClick: Function;
}

function PopUp({ texto, onClick }: PopUpProps) {
  return (
    <View className='absolute z-10 flex h-full w-full items-center justify-center bg-[#0000006a]'>
      <View className='flex h-[16%] w-[85%] items-center justify-around rounded-[15px] bg-branco'>
        <Text className='flex-1 p-2 text-center'>{texto}</Text>
        <Button
          className='h-2/5 rounded-none border-t-[1px] bg-branco'
          texto='text-azul'
          placeholder='Ok'
          onClick={onClick}
        ></Button>
      </View>
    </View>
  );
}

export default PopUp;
