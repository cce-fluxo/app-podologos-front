import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Input from "../Inputs";
import { Button } from "../Button";

interface PopupProps {
  modalVisible: boolean;
  onYesClick?: () => void;
  onNoClick: () => void;
}

function ModalDenuncia({ modalVisible, onNoClick }: PopupProps) {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className="w-screen h-screen z-50 flex items-center justify-center fixed inset-0  bg-black-transparent">
        <View className="bg-white w-[80vw] rounded-2xl justify-center items-center shadow-md shadow-black p-1 space-y-2 ">
          <Input placeholder="Descreva sua denúncia dsadas" />

          <View className="flex py-2 items-center w-full justify-center space-y-2 ">
            <Button
              text="text-branco text-[16px]"
              placeholder="Confirmar denúncia"
            ></Button>
            <Button
              text="text-azul text-[16px]"
              placeholder="Voltar"
              className=" bg-white border-[1px] border-azul"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalDenuncia;
