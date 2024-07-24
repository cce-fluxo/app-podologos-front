import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Header from '../../../../components/Header';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import FotoPe from '../../../../assets/FotoPe.png';
import UserIcon from '../../../../assets/UserIcon.png';
import InformacaoUsuario from '../../../../components/InformacaoUsuario';
import { useNavigation } from '@react-navigation/native';
import ModalOk from '../../../../components/ModalOk';

function InfoSolicitacaoConsulta({}) {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = React.useState(false);

  function closeModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }

  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <ScrollView className='flex space-y-4 px-5 pt-5'>
        <Image
          source={FotoPe}
          alt=''
          className='self-center rounded-2xl'
        ></Image>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações do paciente
        </Text>
        <InformacaoUsuario></InformacaoUsuario>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Informações médicas
        </Text>
        <Button
          placeholder='Ver ficha de anamnese'
          className='w-full self-center border-[1px] border-azul bg-branco'
          text='text-azul'
        ></Button>
        <View className='w-[80%] self-center border-b-[1px] opacity-10'></View>
        <Text className='text-[18px] font-semibold text-texto_cinza'>
          Observações
        </Text>
        <Text className='text-texto_cinza_claro'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          officia expedita quisquam unde nihil placeat repellendus. Recusandae
          fuga inventore blanditiis maxime explicabo excepturi corporis, natus
          repellat, eveniet perspiciatis dicta similique?
        </Text>
        <Button
          onPress={openModal}
          placeholder='Aceitar e enviar contato'
          className='w-full self-center'
        ></Button>
        <Button
          onPress={() => navigation.navigate('HomePodologo')}
          placeholder='Voltar'
          className='mb-8 w-full self-center border-[1px] border-azul bg-branco'
          text='text-azul'
        ></Button>
      </ScrollView>
      <ModalOk
        modalVisible={modalVisible}
        mensagem='Você aceitou essa consulta!'
        onOkClick={closeModal}
      ></ModalOk>
    </SafeAreaView>
  );
}

export default InfoSolicitacaoConsulta;
