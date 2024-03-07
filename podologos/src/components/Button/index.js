import React, { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

function ButtonStyled({ disabled, onClick, placeholder, ...rest }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center w-[87%] h-[10%] ${disabled ? "bg-botao_desabilitado" : "bg-azul"} rounded-[12px]`}
      {...rest}
    >
      <Text className="text-branco text-[16px]">{placeholder}</Text>
    </TouchableOpacity>
  );
}

const Button = styled(ButtonStyled);
export { Button };
