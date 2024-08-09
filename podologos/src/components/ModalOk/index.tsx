import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface PopupProps {
  modalVisible: boolean;
  mensagem: string;
  onOkClick: () => void;
}

function ModalOk({ modalVisible, mensagem, onOkClick }: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black-transparent'>
        <View className='w-[80vw] rounded-2xl bg-white shadow-sm shadow-black'>
          <Text className='p-6 text-center text-base font-semibold'>
            {mensagem}
          </Text>

          <View className='flex items-center justify-center border-t-[1px] border-zinc-300'>
            <TouchableOpacity className='mx-auto py-3' onPress={onOkClick}>
              <Text className='text-lg font-semibold text-azul'>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalOk;
