import React, { Image, Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

function ButtonStyled({
  disabled,
  onPress,
  placeholder,
  text,
  imagem,
  children,
  ...rest
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={`flex flex-row items-center justify-center w-[90%] h-14 ${disabled ? "bg-botao_desabilitado" : "bg-azul"} rounded-[12px]`}
      {...rest}
    >
      {children}
      <Image source={imagem} alt=""></Image>
      <Text
        className={`${text === undefined ? "text-branco" : text} text-[18px]`}
      >
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
}

const Button = styled(ButtonStyled);
export { Button };
