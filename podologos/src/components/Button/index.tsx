import React, { ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

function ButtonStyled({
  disabled,
  onPress,
  loading,
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
      className={`flex h-14 w-[90%] flex-row items-center justify-center ${disabled ? 'bg-botao_desabilitado' : 'bg-azul'} rounded-[12px]`}
      {...rest}
    >
      {loading ? 
      <ActivityIndicator size="large" color="#2087ED" /> 
      :
      <>{children}
        <Image source={imagem} alt=''></Image>
        <Text
          className={`${text === undefined ? 'text-branco' : text} text-[18px]`}
        >
          {placeholder}
        </Text>
      </>}
    </TouchableOpacity>
  );
}

const Button = styled(ButtonStyled);
export { Button };
