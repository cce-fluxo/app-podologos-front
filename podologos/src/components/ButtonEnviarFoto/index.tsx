import React, { View, TouchableOpacity, Text, Image } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import Checkbox from 'expo-checkbox';
import { Button } from '../Button';

interface Props {
  texto?: string;
  foto?: any;
  onPress?: any;
  onPressComFoto?: any;
}

export default function ButtonEnviarFoto ({ texto = 'Enviar imagem', foto, onPress = () => {}, onPressComFoto = () => {} } : Props) {
  
    if (foto) {
        return (
            <Button
                className='w-full self-center flex'
                text='text-white'
                placeholder='Foto'
                onPress={onPressComFoto}
            >
                <MaterialIcons name='close' size={20} color='#ffffff' />
            </Button>
        ); 
    }
  
    return (
        <Button
            className='w-full self-center border-[1px] border-azul bg-branco'
            text='text-azul'
            placeholder={texto}
            onPress={onPress}
        >
            <MaterialIcons name='add' size={20} color='#2087ED' />
        </Button>
    );
}
