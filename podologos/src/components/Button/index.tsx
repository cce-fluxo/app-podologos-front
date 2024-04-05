import React, { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";




function ButtonStyled({ disabled, onClick, placeholder, text, ...rest }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      className={`flex items-center justify-center w-[90%] h-14 ${disabled ? "bg-botao_desabilitado" : "bg-azul"} rounded-[12px]`}
      {...rest}
    >
      <Text
        className={`${text === undefined ? "text-branco text-[16px]" : text}`}
      >
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
}

const Button = styled(ButtonStyled);
export { Button };
