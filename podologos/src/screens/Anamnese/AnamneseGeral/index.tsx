import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/Header';
import { FormData } from '../../../components/FormData/Index';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import Avaliacao from '../Avaliacao';
import { titulos } from '../../../components/AnamneseData';

export default function AnamneseGeral() {
  const [isChecked, setIsChecked] = useState(Array(14).fill(false));
  const paginas = [
    'Dados Pessoais',
    'Avaliação',
    'Motivo Visita',
    'Deformidades',
    'Limitações',
  ];
  const [paginaAtual, setPaginaAtual] = useState(0);

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
            {paginas[paginaAtual]}
          </Text>

          {Array.from({ length: titulos[paginaAtual].length }).map((_, i) => (
            <View key={i}>
              {titulos[paginaAtual][i] === 'Qual?' ||
              titulos[paginaAtual][i] === 'Tipo de calçado mais usado' ||
              titulos[paginaAtual][i] === 'Grau de parentesco?' ||
              paginas[paginaAtual] === 'Dados Pessoais' ? (
                <Input placeholder={titulos[paginaAtual][i]}></Input>
              ) : (
                <View className='mb-2 flex w-[90%] flex-row justify-between p-4'>
                  <Text className='text-[18px] text-titulo_anamnese'>
                    {titulos[paginaAtual][i]}
                  </Text>
                  <Checkbox
                    className='ml-4'
                    value={isChecked[i]}
                    onValueChange={() => handleCheckboxChange(i)}
                    color={isChecked ? '#0A284D' : undefined}
                  />
                </View>
              )}
            </View>
          ))}
          <Button
            className='mt-2 self-center'
            onPress={
              paginaAtual === 4
                ? () => null
                : () => setPaginaAtual(paginaAtual + 1)
            }
            placeholder={paginaAtual === 4 ? 'Finalizar cadastro' : 'Continuar'}
          ></Button>
          {paginaAtual === 0 || paginaAtual === 4 ? (
            <Button
              className='mb-6 mt-2 self-center border-[1px] border-azul bg-branco'
              text='text-azul'
              placeholder={
                paginaAtual === 0
                  ? 'Preencher mais tarde'
                  : 'Solicitar nova consulta'
              }
            ></Button>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
