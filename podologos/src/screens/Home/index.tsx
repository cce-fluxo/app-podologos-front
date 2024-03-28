import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Navbar from "../../components/Navbar";
import Solicitacoes from "../../components/Solicitacoes";
import PageTitle from "../../components/PageTitle";

function Home() {
  return (
    <SafeAreaView className="flex items-center w-screen flex-1 space-y-10">
      <View className="mt-14 w-full ml-10 justify-center ">
        <Text className="text-[25px] text-azul_escuro">Bem vindo,</Text>
        <Text className="text-[25px] text-azul_escuro">Luiz</Text>
      </View>

      <Text className=" text-[25px] font-semibold  text-[#46555A] ">
        Solicitações
      </Text>

      <ScrollView className=""></ScrollView>

      <Navbar></Navbar>
    </SafeAreaView>
  );
}

export default Home;
