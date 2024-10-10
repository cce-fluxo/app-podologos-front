import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/Header';
import { FormData } from '../../../components/FormData/Index';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function Limitacoes() {
  const [isChecked, setIsChecked] = useState(Array(14).fill(false));

  const titulos = [
    'Cadeirante',
    'Muleta',
    'Andador',
    'Bengala',
    'Acamado',
    'Atendimento Domiciliar',
  ];

  const handleCheckboxChange = (index: number) => {
    setIsChecked((prevState) => {
      const newCheckedState = [...prevState];
      newCheckedState[index] = !newCheckedState[index];
      return newCheckedState;
    });
  };

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full'>
        <View className='flex items-center'>
          <Text className='mb-2 w-[90%] text-[20px] font-semibold text-titulo_anamnese'>
            Limitações
          </Text>
          {Array.from({ length: titulos.length }).map((_, i) => (
            <View
              key={i}
              className='mb-2 flex w-[90%] flex-row justify-between p-4'
            >
              <Text className='text-[18px] text-titulo_anamnese'>
                {titulos[i]}
              </Text>
              <Checkbox
                className='ml-4'
                value={isChecked[i]}
                onValueChange={() => handleCheckboxChange(i)}
                color={isChecked ? '#0A284D' : undefined}
              />
            </View>
          ))}
          <Button
            className='self-center'
            placeholder='Finalizar cadastro'
          ></Button>
          <Button
            className='mb-6 mt-4 self-center border-[1px] border-azul bg-branco'
            text='text-azul'
            placeholder='Solicitar nova consulta'
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
