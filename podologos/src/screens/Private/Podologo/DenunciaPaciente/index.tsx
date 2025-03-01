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
import { RadioButton } from 'react-native-radio-buttons-group';
import api from '../../../../services/axios';
import ModalDenuncia from '../../../../components/PopUps/ModalDenuncia';

function DenunciaPaciente({route, navigation}) {
  const [modalDenunciaComSucessoVisivel, setModalDenunciaComSucessoVisivel] = useState(false);
  const [modalDenunciaCustomizadaVisivel, setModalDenunciaCustomizadaVisivel] = useState(false);
  const [isLoadingDenuncia, setIsLoadingDenuncia] = useState(false);
  const [selectedId, setSelectedId] = useState<string | undefined>('first');

  function closeModalDenunciaCustomizada() {
    setModalDenunciaCustomizadaVisivel(false);
  }

  function openModalDenunciaCustomizada() {
    setModalDenunciaCustomizadaVisivel(true);
  }

  function closeModalDenunciaComSucesso() {
    setModalDenunciaComSucessoVisivel(false);
    navigation.goBack();
  }
  function openModalDenunciaComSucesso() {
    setModalDenunciaComSucessoVisivel(true);
  }

  const encontrarDenunciaPredefinidaPeloId = async () => {
    radioButtons.forEach((element) => {
      if (element.id === selectedId) {
        return element.value;
      }
    });
  }

  const denunciaPredefinida = async () => {
    setIsLoadingDenuncia(true);
    try {
      const denuncia = await encontrarDenunciaPredefinidaPeloId;
      const response = await api.post(`/review/create/${route.params.userId}`, {reason: denuncia});
      console.log(response.data);
      console.log(response);
      openModalDenunciaComSucesso();
    } catch (error) {
      console.error('Erro ao realizar review:', error);
    }
    setIsLoadingDenuncia(false);
  }

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Falta de Pagamento',
        value: 'Falta de Pagamento',
      },
      {
        id: '2',
        label: 'Comportamento Inapropriado',
        value: 'Comportamento Inapropriado',
      },
      {
        id: '3',
        label: 'Falta de Colaboração',
        value: 'Falta de Colaboração',
      },
      {
        id: '4',
        label: 'Atraso ou Não Comparecimento',
        value: 'Atraso ou Não Comparecimento',
      },
      {
        id: '5',
        label: 'Desistência de Última Hora',
        value: 'Desistência de Última Hora',
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
              <View className='mb-4 w-[90%] self-center border-b-[1px] opacity-10' />
            </View>
          ))}
          {/* Botão outro */}
          <View className='flex items-start justify-center space-y-4 px-4'>
            <TouchableOpacity
              onPress={openModalDenunciaCustomizada}
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}
            >
              <RadioButton id='' />
              <Text style={{ marginLeft: 8 }}>Outro</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Outros botões (confirmar e cancelar) */}
        <View className='mb-14 flex w-full items-center space-y-4'>
          <Button onPress={denunciaPredefinida} placeholder='Confirmar denúncia' disabled={isLoadingDenuncia} loading={isLoadingDenuncia} />
          <Button
            className='border-2 border-azul bg-white'
            text='text-azul text-[16px]'
            placeholder='Cancelar'
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
      <ModalDenuncia modalVisible={modalDenunciaCustomizadaVisivel} onNoClick={closeModalDenunciaCustomizada} onSucesso={openModalDenunciaComSucesso} userId={route.params.userId} />
      <ModalOk
        modalVisible={modalDenunciaComSucessoVisivel}
        mensagem='Denúncia feita com sucesso!'
        onOkClick={closeModalDenunciaComSucesso}
      />
    </SafeAreaView>
  );
}

export default DenunciaPaciente;
