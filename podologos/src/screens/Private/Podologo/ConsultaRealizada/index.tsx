import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Header from "../../../../components/Header";
import ProfileInfo from "../../../../components/ProfileInfo";
import { Button } from "../../../../components/Button";
import FotoPe from "../../../../assets/FotoPe.png";
import UserIcon from "../../../../assets/UserIcon.png";

function ConsultaRealizada() {
  return (
    <SafeAreaView className="flex w-full h-full bg-branco">
      <Header text="Consultas"></Header>
      <ScrollView className="flex px-5 space-y-4">
        <Image
          source={FotoPe}
          alt=""
          className="self-center rounded-2xl"
        ></Image>
        <Text className="text-texto_cinza text-[18px] font-semibold">
          Informações do paciente
        </Text>
        <View className="flex flex-row space-x-2">
          <Image source={UserIcon}></Image>
          <View className="flex justify-evenly">
            <Text className="text-texto_cinza_claro">João de Oliveira</Text>
            <Text className="text-texto_cinza_claro">(21) 12345-6789</Text>
            <Text className="text-texto_cinza_claro">00000-000</Text>
            <Text className="text-azul underline">Ver mais</Text>
          </View>
        </View>
        <View className="self-center w-[80%] border-b-[1px] opacity-10"></View>
        <Text className="self-center text-azul">Aceita em 01/02/2024</Text>
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
        <Text className="text-texto_cinza_claro mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          officia expedita quisquam unde nihil placeat repellendus. Recusandae
          fuga inventore blanditiis maxime explicabo excepturi corporis, natus
          repellat, eveniet perspiciatis dicta similique?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ConsultaRealizada;
