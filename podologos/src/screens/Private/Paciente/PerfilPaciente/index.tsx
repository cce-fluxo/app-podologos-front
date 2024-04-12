import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import PerfilImage from "../../../../assets/PerfilImage.png";
import Header from "../../../../components/Header";
import ProfileInfo from "../../../../components/ProfileInfo";
import { Button } from "../../../../components/Button";

function PerfilPaciente() {
  return (
    <SafeAreaView className="flex w-full bg-branco">
      <Header text="Perfil"></Header>
      <ScrollView className="flex">
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
        </View>
        <View className="w-full flex items-center space-y-4 mt-10">
          <Button
            text="text-branco text-[16px]"
            placeholder="Editar perfil"
          ></Button>
          <Button
            className=" bg-white border-[1px] border-azul"
            text="text-azul text-[16px]"
            placeholder="Ficha de anamnese"
          ></Button>
          <Button
            className=" bg-white border-[1px] border-azul"
            text="text-azul text-[16px]"
            placeholder="Sair"
          ></Button>
          <Button
            className=" bg-white border-[1px] border-azul"
            text="text-azul text-[16px]"
            placeholder="Excluir conta"
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PerfilPaciente;
