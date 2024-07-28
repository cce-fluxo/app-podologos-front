import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface PopupProps {
  modalVisible: boolean;
  mensagem: string;
  onYesClick?: () => void;
  onNoClick: () => void;
}

function ModalSimNao({ modalVisible, mensagem, onNoClick }: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black-transparent'>
        <View className='w-[80vw] rounded-2xl bg-white shadow-sm shadow-black'>
          <Text className='p-5 text-center text-base font-semibold'>
            {mensagem}
          </Text>

          <View className='flex flex-row items-center justify-center border-t-[1px] border-zinc-300'>
            <TouchableOpacity onPress={onNoClick} className='mx-auto py-3'>
              <Text className='text-lg font-semibold text-azul'>Sim</Text>
            </TouchableOpacity>
            <View className='h-full border-r-[1px] border-zinc-300' />
            <TouchableOpacity className='mx-auto py-3' onPress={onNoClick}>
              <Text className='text-lg font-semibold text-azul'>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalSimNao;
