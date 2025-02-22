import React, { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { styled } from 'nativewind';
import { useState } from 'react';

export default function Dropdown({
  onPress,
  loading,
  placeholder,
  text,
  data,
  children,
  ...rest
}) {

    const [isFocus, setIsFocus] = useState(false);

  return (
    <>
    <TouchableOpacity
      onPress={onPress}
      className={`flex h-14 w-[90%] flex-row items-center justify-center`}
      {...rest}
    >
      
    </TouchableOpacity>

    {isFocus && 
    <View className='my-4 w-[90%] bg-cinza/20 p-4'>
    </View>
    }
    
    </>
    
  );
}
