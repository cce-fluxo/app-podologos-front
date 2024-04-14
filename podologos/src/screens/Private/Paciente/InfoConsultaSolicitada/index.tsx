import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../../../../components/Header";
import { Button } from "../../../../components/Button";

export default function InfoConsultaSolicitada() {
  return (
    <SafeAreaView className="flex w-full h-full bg-branco">
      <Header text="Informações"></Header>
      <ScrollView className="flex px-5 space-y-4">
        <Text className="text-azul text-[16px]">
          Aguardando a solicitação ser aceita por algum profissional
        </Text>
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
        <Text className="text-texto_cinza text-[18px] font-semibold">
          Informações médicas
        </Text>
        <Button placeholder="Ver ficha de anamnese" className="w-full"></Button>
      </ScrollView>
    </SafeAreaView>
  );
}
