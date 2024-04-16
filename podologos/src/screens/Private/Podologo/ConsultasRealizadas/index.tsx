import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Solicitacoes from "../../../../components/Solicitacoes";
import Header from "../../../../components/Header";
import { useNavigation } from "@react-navigation/native";

function ConsultasRealizadas() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex items-center w-screen flex-1 space-y-6 bg-white">
      <Header text="Consultas"></Header>

      <View className="flex flex-row justify-around w-full">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ConsultasAceitas");
          }}
        >
          <Text className="text-[22px] text-azul/40 font-semibold">
            Aceitas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-b-4 border-azul">
          <Text className="text-[22px] text-azul font-semibold">
            Realizadas
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="">
        <Solicitacoes />
        <Solicitacoes />
        <Solicitacoes />
        <Solicitacoes />
        <Solicitacoes />
        <Solicitacoes />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ConsultasRealizadas;
