import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/Header';
import { FormData } from '../../../components/FormData/Index';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function Deformidades() {
  const [isChecked, setIsChecked] = useState(Array(14).fill(false));

  const titulos = [
    'Dedos em Garra',
    'Joanete',
    'Dedos em Martelo',
    'Amputações',
    'Edema (inchaço nas pernas)',
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
            Deformidades
          </Text>
          {Array.from({ length: titulos.length }).map((_, i) => (
            <View className='mb-2 flex w-[90%] flex-row justify-between p-4'>
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
          <Button className='self-center' placeholder='Continuar'></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
