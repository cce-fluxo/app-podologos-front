import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Header from "../../../../components/Header";
import ProfileInfo from "../../../../components/ProfileInfo";
import { Button } from "../../../../components/Button";
import FotoPe from "../../../../assets/FotoPe.png";
import UserIcon from "../../../../assets/UserIcon.png";

function Solicitacao() {
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
          placeholder="Aceitar e enviar contato"
          className="self-center w-full"
        ></Button>
        <Button
          placeholder="Voltar"
          className="self-center w-full bg-branco border-azul border-[1px] mb-8"
          text="text-azul"
        ></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Solicitacao;
