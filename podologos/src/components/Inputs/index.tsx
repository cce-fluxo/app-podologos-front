import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styled } from 'nativewind';

function InputStyled({ field, placeholder, texto, form, rightIcon, ...rest }) {
  return (
    <View
      {...rest}
      className={`h-auto w-[90%] flex-row items-center self-center ${texto === undefined ? 'gap-0' : ''}`}
    >
      <Text className={`${texto === undefined ? 'h-0' : 'h-auto'}`}>
        {texto}
      </Text>
      <View className='flex-1 flex-row items-center'>
        <TextInput
          placeholder={placeholder}
          {...rest}
          className='mt-2 h-14 flex-1 rounded-[12px] bg-cinza/20 p-4 text-black'
        />
        {rightIcon && <View className='absolute right-4'>{rightIcon}</View>}
      </View>
    </View>
  );
}

const Input = styled(InputStyled);
export default Input;
