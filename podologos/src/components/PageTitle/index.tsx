import React, { View, TouchableOpacity, Text, Image } from "react-native";
import Seta from "../../assets/Seta.svg";

interface Props {
  text?: string;
}

export default function PageTitle({ text }: Props) {
  return (
    <View className="flex items-center w-full">
      <TouchableOpacity>
        <Image source={Seta}></Image>
      </TouchableOpacity>
      <Text className="text-azul_escuro text-[24px]">{text}</Text>
    </View>
  );
}
