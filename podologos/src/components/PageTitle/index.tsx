import React, { View, TouchableOpacity, Text, Image } from "react-native";
import Seta from "../../assets/ArrowLeft.png";

interface Props {
  text?: string;
}

export default function PageTitle({ text }: Props) {
  return (
    <View className="flex flex-row items-center  w-full">

      <View className="flex ">
        <TouchableOpacity>
          <Image className="w-8 h-8" source={Seta}></Image>
        </TouchableOpacity>
      </View>

      <View className="flex items-center justify-center w-[100%] ">
        <Text className="text-azul_escuro mr-8 text-[24px]">{text}</Text>
      </View>
    </View>
  );
}
