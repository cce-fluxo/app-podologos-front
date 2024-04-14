import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Avaliacao() {
  return (
    <View className="flex space-y-3 w-full bg-branco p-4 rounded-2xl shadow-black shadow-md">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-texto_cinza font-semibold text-[18px]">
          Larissa Oliveira
        </Text>
        <View className="flex flex-row items-center bg-cinza rounded-md p-1 space-x-1">
          <Entypo name="star" size={12} color="black" />
          <Text className="font-semibold">4.75</Text>
        </View>
      </View>
      <Text className="text-texto_cinza_claro">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        doloremque porro obcaecati suscipit et sunt rem quasi! Sit perferendis
        nisi quia. Cum, veritatis. Ea praesentium nulla distinctio quos ullam
        illum.
      </Text>
    </View>
  );
}
