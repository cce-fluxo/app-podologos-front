import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../../components/Header';
import { Button } from '../../../../components/Button';
import CustomRadioButton from '../../../../components/RadioButton';
import ModalOk from '../../../../components/PopUps/ModalOk';

function DenunciaPaciente() {
  const [modalVisible, setModalVisible] = React.useState(false);

  function closeModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }
  const [selectedId, setSelectedId] = useState<string | undefined>('first');

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Higiene Inadequada',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Equipamento Danificado',
        value: 'option2',
      },
      {
        id: '3',
        label: 'Lesões Físicas',
        value: 'option2',
      },
      {
        id: '4',
        label: 'Atraso ou Não Comparecimento',
        value: 'option2',
      },
      {
        id: '5',
        label: 'Falta de Profissionalismo',
        value: 'option2',
      },
      {
        id: '6',
        label: 'Diagnóstico Errôneo',
        value: 'option2',
      },
      {
        id: '7',
        label: 'Cobrança Indevida',
        value: 'option2',
      },
      {
        id: '8',
        label: 'Outro',
        value: 'option2',
      },
    ],
    []
  );

  return (
    <SafeAreaView className='flex w-full flex-1 bg-branco'>
      <ScrollView className='pb-8 pt-5'>
        <View className='mb-10 flex w-full justify-center'>
          {radioButtons.map((radio, index) => (
            <View className='flex items-start justify-center space-y-4 px-4'>
              <CustomRadioButton
                key={index}
                label={radio.label}
                onPress={() => setSelectedId(radio.id)}
                selected={selectedId === radio.id}
              />
              <View className='mb-4 w-[90%] self-center border-b-[1px] opacity-10'></View>
            </View>
          ))}
        </View>
        <View className='mb-14 flex w-full items-center space-y-4'>
          <Button onPress={openModal} placeholder='Confirmar denúncia'></Button>
          <Button
            className='border-2 border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Cancelar'
          ></Button>
        </View>
      </ScrollView>
      <ModalOk
        modalVisible={modalVisible}
        mensagem='Denúncia feita com sucesso!'
        onOkClick={closeModal}
      />
    </SafeAreaView>
  );
}

export default DenunciaPaciente;
