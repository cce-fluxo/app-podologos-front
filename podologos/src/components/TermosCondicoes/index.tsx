import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function TermosCondicoes() {
  return (
    <View className="flex justify-center ml-4 space-y-1 w-full">
      <View className=" flex flex-row gap-1">
        <Text>Declaro que li com os</Text>
        <TouchableOpacity>
          <Text className="font-bold underline">Termos</Text>
        </TouchableOpacity>
        <Text>e</Text>
      </View>

      <TouchableOpacity>
        <Text className="font-bold underline">Condições</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TermosCondicoes;
