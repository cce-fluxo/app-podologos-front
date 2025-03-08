import React, { View, TouchableOpacity, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import Checkbox from 'expo-checkbox';

interface Props {
  texto?: string;
  value?: boolean;
  onValueChange?: any;
}

export default function InputCheckbox ({ texto = 'Checkbox', value = false, onValueChange = () => {} } : Props) {
  return (
    <View className='mb-2 flex w-[90%] flex-row justify-between p-4 items-center'>
        <Text className='text-[18px] text-titulo_anamnese'>
        {texto}
        </Text>
        <Checkbox
            className='ml-4'
            value={value}
            onValueChange={(value) => onValueChange(value)}
            color={value ? '#0A284D' : undefined}
        />
    </View>
  );
}
