import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface PopupProps {
  modalVisible: boolean;
  mensagem: string;
  onYesClick?: () => void;
  onNoClick: () => void;
}

function ModalSimNao({ modalVisible, mensagem, onNoClick }: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className="w-screen h-screen z-50 flex items-center justify-center fixed inset-0  bg-black-transparent">
        <View className="bg-white w-[80vw] rounded-2xl shadow-md shadow-black ">
          <Text className="text-base text-center p-5 font-semibold">
            {mensagem}
          </Text>

          <View className="flex flex-row items-center justify-center border-t-[1px] border-zinc-300 ">
            <TouchableOpacity onPress={onNoClick} className="mx-auto py-3">
              <Text className="text-azul font-semibold text-lg">Sim</Text>
            </TouchableOpacity>
            <View className=" border-r-[1px] h-full border-zinc-300" />
            <TouchableOpacity className="mx-auto py-3" onPress={onNoClick}>
              <Text className="text-azul font-semibold text-lg">Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalSimNao;
