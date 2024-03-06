import React, { Text, TouchableOpacity } from "react-native";

export default function Button(props) {
  return (
    <TouchableOpacity className="flex items-center justify-center bg-azul w-[87%] h-[50px] rounded-[12px]">
      <Text className="text-branco text-[16px]">{props.placeholder}</Text>
    </TouchableOpacity>
  );
}
