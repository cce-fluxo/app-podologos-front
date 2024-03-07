import React, { View, TouchableOpacity, Text, Image } from "react-native";
import Seta from "../../assets/Seta.png";

interface Props {
  text?: string;
}

export default function PageTitle({ text }: Props) {
  return (
    <View className="flex flex-row items-center justify-between w-full px-4">
      <TouchableOpacity className="w-[10px]">
        <Image source={Seta}></Image>
      </TouchableOpacity>
      <Text className="text-azul_escuro text-[24px]">{text}</Text>
      <View className="w-[10px]"></View>
    </View>
  );
}
