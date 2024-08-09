import React, { Text, TextInput, View } from 'react-native';
import { styled } from 'nativewind';

function InputStyled({ field, placeholder, texto, form, ...rest }) {
  return (
    <View
      {...rest}
      className={`h-auto w-[90%] self-center ${texto === undefined ? 'gap-0' : ''}`}
    >
      <Text className={`${texto === undefined ? 'h-0' : 'h-auto'}`}>
        {texto}
      </Text>
      <TextInput
        placeholder={placeholder}
        {...rest}
        className='mt-2 h-14 rounded-[12px] bg-cinza/20 p-4 text-black'
      ></TextInput>
    </View>
  );
}

const Input = styled(InputStyled);
export default Input;
