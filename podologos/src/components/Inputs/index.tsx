import React, { Text, TextInput, View } from "react-native";
import { styled } from "nativewind";

function InputStyled({ placeholder, texto, ...rest }) {
  return (
    <View
      className={`w-[90%] h-auto self-center ${texto === undefined ? "gap-0" : ""}`}
      {...rest}
    >
      <Text className={`${texto === undefined ? "h-0" : "h-auto"}`}>
        {texto}
      </Text>
      <TextInput
        placeholder={placeholder}
        className="bg-cinza/20 h-14 mt-2 rounded-[12px] p-4 text-black"
      ></TextInput>
    </View>
  );
}

const Input = styled(InputStyled);
export default Input;
