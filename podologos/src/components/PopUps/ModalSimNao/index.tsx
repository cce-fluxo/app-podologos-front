import React from 'react';
import { ActivityIndicator, Modal, Text, TouchableOpacity, View } from 'react-native';

interface PopupProps {
  modalVisible: boolean;
  mensagem: string;
  onYesClick?: () => void;
  onNoClick: () => void;
  loading?: boolean;
  erro?: any;
}

function ModalSimNao({
  modalVisible,
  mensagem,
  onNoClick,
  onYesClick,
  loading = false,
  erro
}: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black-transparent'>
        <View className='w-[80vw] rounded-2xl bg-white shadow-sm shadow-black'>
          {loading 
          ? 
          <ActivityIndicator className='m-auto py-10' size={50} color="#2087ED" />
          :
            erro 
            ?
            <>
              <Text className='p-6 text-center text-base font-semibold'>
                {erro ? "Houve um erro!" : mensagem}
              </Text>
  
              <View className='flex items-center justify-center border-t-[1px] border-zinc-300'>
                <TouchableOpacity className='mx-auto py-3' onPress={onNoClick}>
                  <Text className='text-lg font-semibold text-azul'>Ok</Text>
                </TouchableOpacity>
              </View>
            </>
            :
            <>
              <Text className='p-5 text-center text-base font-semibold'>
                {mensagem}
              </Text>

              <View className='flex flex-row items-center justify-center border-t-[1px] border-zinc-300'>
                <TouchableOpacity onPress={onYesClick} className='mx-auto py-3'>
                  <Text className='text-lg font-semibold text-azul'>Sim</Text>
                </TouchableOpacity>
                <View className='h-full border-r-[1px] border-zinc-300' />
                <TouchableOpacity className='mx-auto py-3' onPress={onNoClick}>
                  <Text className='text-lg font-semibold text-azul'>Não</Text>
                </TouchableOpacity>
              </View>
            </>

          }
        </View>
      </View>
    </Modal>
  );
}

export default ModalSimNao;
