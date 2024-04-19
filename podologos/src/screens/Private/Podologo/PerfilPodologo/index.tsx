import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import PerfilImage from "../../../../assets/PerfilImage.png";
import Header from "../../../../components/Header";
import ProfileInfo from "../../../../components/ProfileInfo";
import { Button } from "../../../../components/Button";
import ModalSimNao from "../../../../components/ModalSimNao";
import Avaliacao from "../../../../components/Avaliacao";
import { useNavigation } from "@react-navigation/native";

function PerfilPodologo() {
  const [modalVisible, setModalVisible] = React.useState(false);

  function closeModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex  w-full">
      <Header text="Perfil"></Header>
      <ScrollView>
        <View className="flex items-center justify-center">
          <Image className="" source={PerfilImage}></Image>
          <View className="flex flex-row items-center justify-center bg-zinc-200 mt-3 rounded-md p-1">
            <Entypo name="star" size={20} color="black" />
            <Text className="font-semibold">4.75</Text>
          </View>
        </View>

        <View className="ml-6 mt-10">
          <ProfileInfo label="Nome" text="Giovanni"></ProfileInfo>
          <ProfileInfo label="Sobrenome" text="Souza"></ProfileInfo>
          <ProfileInfo
            label="Email"
            text="giovannisouza@gmail.com"
          ></ProfileInfo>
          <ProfileInfo label="Telefone" text="(21) 12345-6789"></ProfileInfo>
          <ProfileInfo label="Cep" text="12345-678"></ProfileInfo>
          <ProfileInfo label="Formação" text="Podologia - UFRJ"></ProfileInfo>
        </View>
        <View className="w-full flex items-center space-y-4 mt-10">
          <Button
            onPress={() => navigation.navigate("PerfilDoPaciente")}
            text="text-branco text-[16px]"
            placeholder="Editar perfil"
          ></Button>
          <Button
            className=" bg-white border-2 border-azul"
            text="text-azul text-[16px]"
            placeholder="Sair"
          ></Button>
          <Button
            onPress={openModal}
            className=" bg-white border-2 border-azul"
            text="text-azul text-[16px]"
            placeholder="Excluir conta"
          ></Button>
        </View>
        <View className="mb-10 w-full flex space-y-4 mt-10">
          <Text className="ml-6 text-[25px] font-semibold  text-[#46555A] ">
            Avaliações:
          </Text>
        </View>
        <View className="flex mb-14">
          <Avaliacao />
          <Avaliacao />
          <Avaliacao />
        </View>
      </ScrollView>
      <ModalSimNao
        modalVisible={modalVisible}
        mensagem="Tem certeza que deseja excluir sua conta?"
        onNoClick={closeModal}
      ></ModalSimNao>
    </SafeAreaView>
  );
}

export default PerfilPodologo;
