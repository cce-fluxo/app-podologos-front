import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Input from '../Inputs';
import { Button } from '../Button';

interface PopupProps {
  modalVisible: boolean;
  onYesClick?: () => void;
  onNoClick: () => void;
}

function ModalDenuncia({ modalVisible, onNoClick }: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black-transparent'>
        <View className='w-[80vw] items-center justify-center space-y-2 rounded-2xl bg-white p-1 shadow-md shadow-black'>
          <Input placeholder='Descreva sua denúncia dsadas' />

          <View className='flex w-full items-center justify-center space-y-2 py-2'>
            <Button
              text='text-branco text-[16px]'
              placeholder='Confirmar denúncia'
            ></Button>
            <Button
              text='text-azul text-[16px]'
              placeholder='Voltar'
              className='border-[1px] border-azul bg-white'
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalDenuncia;
