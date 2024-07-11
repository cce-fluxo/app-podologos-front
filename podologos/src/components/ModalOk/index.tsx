import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface PopupProps {
  modalVisible: boolean;
  mensagem: string;
  onOkClick: () => void;
}

function ModalOk({ modalVisible, mensagem, onOkClick }: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className="w-screen h-screen z-50 flex items-center justify-center fixed inset-0  bg-black-transparent">
        <View className="bg-white w-[80vw] rounded-2xl shadow-sm shadow-black ">
          <Text className="text-base text-center p-6 font-semibold">
            {mensagem}
          </Text>

          <View className="flex items-center justify-center border-t-[1px] border-zinc-300 ">
            <TouchableOpacity className="mx-auto py-3" onPress={onOkClick}>
              <Text className="text-azul font-semibold text-lg">Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalOk;
