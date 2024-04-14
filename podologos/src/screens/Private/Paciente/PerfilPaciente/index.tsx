import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import PerfilImage from "../../../../assets/PerfilImage.png";
import Header from "../../../../components/Header";
import ProfileInfo from "../../../../components/ProfileInfo";
import { Button } from "../../../../components/Button";
import Avaliacao from "../../../../components/Avaliacao";

function PerfilPaciente() {
  const arr = [0, 0, 0, 0];
  return (
    <SafeAreaView className="flex w-full bg-branco">
      <Header text="Perfil"></Header>
      <ScrollView className="flex px-5 space-y-8">
        <View className="flex items-center justify-center">
          <Image className="" source={PerfilImage}></Image>
          <View className="flex flex-row items-center justify-center bg-cinza mt-3 rounded-md p-1 space-x-2">
            <Entypo name="star" size={20} color="black" />
            <Text className="font-semibold">4.75</Text>
          </View>
        </View>
        <Text className="self-center text-azul underline text-[14px] font-semibold">
          Ver anamnese
        </Text>
        <View className="flex space-y-4">
          <ProfileInfo label="Nome" text="Giovanni"></ProfileInfo>
          <ProfileInfo label="Sobrenome" text="Souza"></ProfileInfo>
          <ProfileInfo
            label="Email"
            text="giovannisouza@gmail.com"
          ></ProfileInfo>
          <ProfileInfo label="Telefone" text="(21) 12345-6789"></ProfileInfo>
          <ProfileInfo label="Cep" text="12345-678"></ProfileInfo>
        </View>
        <View className="w-full flex items-center space-y-4">
          <Button placeholder="Editar perfil"></Button>
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
        <Text className="text-texto_cinza font-semibold text-[18px]">
          Avaliações
        </Text>
        <View className="flex space-y-4 w-full mb-24">
          {Array.from({ length: 10 }).map((_, i) => (
            <View
              key={i}
              className="flex space-y-3 w-full bg-branco p-4 rounded-2xl shadow-black shadow-md"
            >
              <View className="flex flex-row items-center justify-between">
                <Text className="text-texto_cinza font-semibold text-[18px]">
                  Larissa Oliveira
                </Text>
                <View className="flex flex-row items-center bg-cinza rounded-md p-1 space-x-1">
                  <Entypo name="star" size={12} color="black" />
                  <Text className="font-semibold">4.75</Text>
                </View>
              </View>
              <Text className="text-texto_cinza_claro">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium doloremque porro obcaecati suscipit et sunt rem
                quasi! Sit perferendis nisi quia. Cum, veritatis. Ea praesentium
                nulla distinctio quos ullam illum.
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PerfilPaciente;
