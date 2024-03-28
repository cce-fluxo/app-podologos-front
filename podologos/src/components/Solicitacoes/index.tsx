import { View } from "lucide-react-native";
import React from "react";
import { Image, Text } from "react-native";

function Solicitacoes() {
  return (
    <View className="flex w-full items-center bg-zinc-300">
      <Text className=" w-screen flex">
        João da Silva fez uma solicitação perto de você
      </Text>
    </View>
  );
}

export default Solicitacoes;
