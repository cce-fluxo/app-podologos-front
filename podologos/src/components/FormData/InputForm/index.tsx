import React, { Text, TextInput, View } from 'react-native';
import { styled } from 'nativewind';
import MaskInput, { Masks, useMaskedInputProps } from 'react-native-mask-input';
import { useState } from 'react';

function InputStyled({ field, placeholder, texto, form, mascara, ...rest }) {
  return (
    <View
      {...rest}
      className={`h-auto w-[87%] self-center ${texto === undefined ? 'gap-0' : ''}`}
    >
      <Text className={`${texto === undefined ? 'h-0' : 'h-auto'}`}>
        {texto}
      </Text>
      <MaskInput
        onChangeText={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
        value={form.values[field.name]}
        placeholder={placeholder}
        {...rest}
        mask={mascara}
        className='mt-2 h-14 rounded-[12px] bg-cinza/20 p-4 text-black'
      ></MaskInput>
    </View>
  );
}

const InputForm = styled(InputStyled);
export default InputForm;
