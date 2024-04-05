import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

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
      <View className="w-screen h-screen z-50 flex items-center justify-center fixed inset-0  bg-black-transparent">
        <View className="bg-white w-[85vw] rounded-t-2xl justify-center items-center shadow-md shadow-black p-4 ">
          <Text className="text-base text-zinc-500 text-center p-2 font-bold mb-2">
            {mensagem}
          </Text>

          <View className="flex  items-center w-full justify-center space-y-2 ">
            <TouchableOpacity className="w-full flex flex-row items-center justify-center h-14 bg-azul rounded-[12px] ">
              <Feather name="camera" size={18} color="white" />
              <Text className=" ml-2 text-branco text-[16px]">Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-full flex flex-row items-center justify-center h-14 bg-azul rounded-[12px] ">
              <FontAwesome5 name="image" size={18} color="white" />
              <Text className=" ml-2 text-branco text-[16px]">Galeria</Text>
            </TouchableOpacity>
            {retornavel && (
              <TouchableOpacity onPress={onNoClick} className="w-full flex flex-row items-center justify-center h-14 bg-azul rounded-[12px] ">
                <FontAwesome6 name="trash" size={16} color="white" />
                <Text className=" ml-2 text-branco text-[16px]">
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
