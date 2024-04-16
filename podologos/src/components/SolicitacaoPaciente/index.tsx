import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

function SolicitacaoPaciente() {
  return (
    <TouchableOpacity className="flex justify-center bg-branco rounded-2xl space-y-4 p-4 shadow-md mt-4">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-[16px]">Você fez uma solicitação em 21/02</Text>
        <Feather name="info" size={18} color="#2087ED" />
      </View>

      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center space-x-1">
          <Feather name="clock" size={16} color="#2087ED" />
          <Text className="text-azul text-[16px]">Aguardando</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SolicitacaoPaciente;
