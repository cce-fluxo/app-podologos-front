import React, { Text, TextInput, View } from "react-native";
import { styled } from "nativewind";

function InputStyled({ field, placeholder, texto, form, ...rest }) {
  return (
    <View
      {...rest}
      className={`w-[90%] h-auto self-center ${texto === undefined ? "gap-0" : ""}`}
    >
      <Text className={`${texto === undefined ? "h-0" : "h-auto"}`}>
        {texto}
      </Text>
      <TextInput
        onChangeText={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        value={form.values[field.name]}
        placeholder={placeholder}
        {...rest}
        className="bg-cinza/20 h-14 mt-2 rounded-[12px] p-4 text-black"
      ></TextInput>
    </View>
  );
}

const InputForm = styled(InputStyled);
export default InputForm;
