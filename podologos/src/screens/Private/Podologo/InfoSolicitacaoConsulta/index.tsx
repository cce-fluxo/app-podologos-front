import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Header from "../../../../components/Header";
import ProfileInfo from "../../../../components/ProfileInfo";
import { Button } from "../../../../components/Button";
import FotoPe from "../../../../assets/FotoPe.png";
import UserIcon from "../../../../assets/UserIcon.png";
import InformacaoUsuario from "../../../../components/InformacaoUsuario";
import { useNavigation } from "@react-navigation/native";
import ModalOk from "../../../../components/ModalOk";

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
    <SafeAreaView className="flex w-full h-full bg-branco">
      <Header text="Soliciatação"></Header>
      <ScrollView className="flex px-5 space-y-4">
        <Image
          source={FotoPe}
          alt=""
          className="self-center rounded-2xl"
        ></Image>
        <Text className="text-texto_cinza text-[18px] font-semibold">
          Informações do paciente
        </Text>
        <InformacaoUsuario></InformacaoUsuario>
        <View className="self-center w-[80%] border-b-[1px] opacity-10"></View>
        <Text className="text-texto_cinza text-[18px] font-semibold">
          Informações médicas
        </Text>
        <Button
          placeholder="Ver ficha de anamnese"
          className="self-center w-full bg-branco border-azul border-[1px]"
          text="text-azul"
        ></Button>
        <View className="self-center w-[80%] border-b-[1px] opacity-10"></View>
        <Text className="text-texto_cinza text-[18px] font-semibold">
          Observações
        </Text>
        <Text className="text-texto_cinza_claro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          officia expedita quisquam unde nihil placeat repellendus. Recusandae
          fuga inventore blanditiis maxime explicabo excepturi corporis, natus
          repellat, eveniet perspiciatis dicta similique?
        </Text>
        <Button
        onPress ={openModal}
          placeholder="Aceitar e enviar contato"
          className="self-center w-full"
        ></Button>
        <Button
          onPress={() => navigation.navigate("HomePodologo")}
          placeholder="Voltar"
          className="self-center w-full bg-branco border-azul border-[1px] mb-8"
          text="text-azul"
        ></Button>
      </ScrollView>
      <ModalOk
        modalVisible={modalVisible}
        mensagem="Você aceitou essa consulta!"
        onNoClick={closeModal}
      ></ModalOk>
    </SafeAreaView>
  );
}

export default InfoSolicitacaoConsulta;
