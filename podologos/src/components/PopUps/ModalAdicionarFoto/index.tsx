import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../Button';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

interface PopupProps {
  mensagem: string;
  modalVisible: boolean;
  retornavel: boolean;
  onYesClick?: () => void;
  onNoClick: () => void;
}

function ModalAdicionarFoto({
  modalVisible,
  onNoClick,
  mensagem,
  retornavel,
}: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black-transparent'>
        <View className='w-[85vw] items-center justify-center rounded-t-2xl bg-white p-4 shadow-md shadow-black'>
          <Text className='mb-2 p-2 text-center text-base font-bold text-zinc-500'>
            {mensagem}
          </Text>

          <View className='flex w-full items-center justify-center space-y-2'>
            <TouchableOpacity className='flex h-14 w-full flex-row items-center justify-center rounded-[12px] bg-azul'>
              <Feather name='camera' size={18} color='white' />
              <Text className='ml-2 text-[16px] text-branco'>Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex h-14 w-full flex-row items-center justify-center rounded-[12px] bg-azul'>
              <FontAwesome5 name='image' size={18} color='white' />
              <Text className='ml-2 text-[16px] text-branco'>Galeria</Text>
            </TouchableOpacity>
            {retornavel && (
              <TouchableOpacity
                onPress={onNoClick}
                className='flex h-14 w-full flex-row items-center justify-center rounded-[12px] bg-azul'
              >
                <FontAwesome6 name='trash' size={16} color='white' />
                <Text className='ml-2 text-[16px] text-branco'>
                  Remover foto
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalAdicionarFoto;
