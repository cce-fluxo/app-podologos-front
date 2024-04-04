import React, { View, TouchableOpacity, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  text?: string;
}

export default function PageTitle({ text }: Props, { navigation }) {
  return (
    <View className="flex flex-row items-center justify-between w-full px-4 mt-2 mb-4">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="w-[20px]"
      >
        <Feather name="arrow-left" color={"#0A284D"} size={25} />
      </TouchableOpacity>
      <Text className="text-azul_escuro text-[24px]">{text}</Text>
      <View className="w-[20px]"></View>
    </View>
  );
}
