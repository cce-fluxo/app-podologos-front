import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styled } from 'nativewind';
import MaskInput, { Masks, useMaskedInputProps } from 'react-native-mask-input';

function InputStyled({
  field,
  placeholder,
  texto,
  form,
  rightIcon,
  mascara,
  ...rest
}) {
  const [value, setValue] = React.useState('');

  return (
    <View
      {...rest}
      className={`h-auto w-[90%] flex-row items-center self-center ${texto === undefined ? 'gap-0' : ''}`}
    >
      <Text className={`${texto === undefined ? 'h-0' : 'h-auto'}`}>
        {texto}
      </Text>
      <View className='flex-1 flex-row items-center'>
        <MaskInput
          value={value}
          onChangeText={(masked, unmasked) => {
            setValue(masked);
          }}
          placeholder={placeholder}
          mask={mascara}
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
