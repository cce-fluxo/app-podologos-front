/* import { useNavigation } from "@react-navigation/native"; */

import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  return (
    <View className="flex flex-row h-20 w-full items-stretch shadow-sm shadow-black rounded-t-xl">
      <TouchableOpacity className="h-20 flex flex-1">
        <View className="flex flex-1 justify-center items-center">
          <Entypo name="home" size={20} color={"#2087ED"} />

          <Text className="text-azul text-[15px] font-semibold">Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="h-20 flex flex-1">
        <View className="flex flex-1 justify-center items-center">
          <FontAwesome name="plus-square-o" size={20} color={"#2087ED"} />

          <Text className="text-azul text-[15px] font-semibold">Consultas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="h-20 flex flex-1">
        <View className="flex flex-1 justify-center items-center">
          <AntDesign name="hearto" size={20} color={"#2087ED"} />
          <Text className="text-azul text-[15px] font-semibold">Perfil</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
