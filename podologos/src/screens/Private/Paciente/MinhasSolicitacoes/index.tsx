import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Navbar from "../../../../components/Navbar";
import SolicitacaoPaciente from "../../../../components/SolicitacaoPaciente";
import PageTitle from "../../../../components/Header";

export default function MinhasSolicitacoes() {
  return (
    <SafeAreaView className="flex items-center w-screen flex-1 space-y-10 bg-branco">
      <View className="flex items-center w-screen space-y-10 px-5">
        <View className="mt-4 w-full justify-center ">
          <Text className="text-[25px] text-azul_escuro">Bem vindo,</Text>
          <Text className="text-[25px] text-azul_escuro">Luiz</Text>
        </View>

        <Text className=" text-[25px] font-semibold  text-[#46555A] ">
          Minhas solicitações
        </Text>
      </View>

      <ScrollView className="flex w-full px-5">
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <SolicitacaoPaciente />
        <View className="h-8"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
