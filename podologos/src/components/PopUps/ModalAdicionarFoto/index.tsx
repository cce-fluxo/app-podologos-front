import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

interface PopupProps {
  mensagem: string;
  modalVisible: boolean;
  fotoApagavel?: boolean;
  onFecharModalClick: () => void;
  onCameraClick?: () => void;
  onGaleriaClick?: () => void;
  onRemoverFotoClick?: () => void;
}

function ModalAdicionarFoto({
  modalVisible,
  onFecharModalClick,
  onRemoverFotoClick,
  onCameraClick,
  onGaleriaClick,
  mensagem,
  fotoApagavel = false,
}: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <TouchableOpacity onPress={onFecharModalClick} className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-end bg-black-transparent'>
        <TouchableOpacity className='w-full items-center justify-center rounded-t-2xl bg-white p-4 shadow-md shadow-black'>
          <Text className='mb-2 p-2 text-center text-base font-bold text-zinc-500'>
            {mensagem}
          </Text>

          <View className='flex w-full items-center justify-center space-y-2'>
            <TouchableOpacity onPress={onCameraClick} className='flex h-14 w-full flex-row items-center justify-center rounded-[12px] bg-azul'>
              <Feather name='camera' size={18} color='white' />
              <Text className='ml-2 text-[16px] text-branco'>Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onGaleriaClick} className='flex h-14 w-full flex-row items-center justify-center rounded-[12px] bg-azul'>
              <FontAwesome5 name='image' size={18} color='white' />
              <Text className='ml-2 text-[16px] text-branco'>Galeria</Text>
            </TouchableOpacity>
            {fotoApagavel && (
              <TouchableOpacity
                onPress={onRemoverFotoClick}
                className='flex h-14 w-full flex-row items-center justify-center rounded-[12px] bg-azul'
              >
                <FontAwesome6 name='trash' size={16} color='white' />
                <Text className='ml-2 text-[16px] text-branco'>
                  Remover foto
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

export default ModalAdicionarFoto;
