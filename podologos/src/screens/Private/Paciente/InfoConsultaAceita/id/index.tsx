import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Header from "../../../../../components/Header";
import ProfileInfo from "../../../../../components/ProfileInfo";
import { Button } from "../../../../../components/Button";
import FotoPe from "../../../../assets/FotoPe.png";
import UserIcon from "../../../../assets/UserIcon.png";
import InformacaoUsuario from "../../../../../components/InformacaoUsuario";
import { api } from "../../../../../services/api";

function InfoConsultaAceita({ route }) {
  const { id } = route.params;
  const [data, setData] = useState([]);

  async function getConsulta() {
    try {
      const response = await api.get(`/appointment/consultas-paciente/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getConsulta();
  }, []);

  return (
    <SafeAreaView className="flex w-full h-full bg-branco">
      <Header text="Informações"></Header>
      <ScrollView className="flex px-5 space-y-4">
        <Text className="text-texto_cinza text-[18px] font-semibold">
          Aceito por
        </Text>
        <View className="flex flex-row space-x-2">
          <Image source={UserIcon}></Image>
          <View className="flex justify-center space-y-1">
            <Text className="text-texto_cinza text-[18px] font-semibold">
              João de Oliveira
            </Text>
            <Text className="text-texto_cinza_claro">(21) 12345-6789</Text>
            <Text className="text-azul underline">Ver mais</Text>
          </View>
        </View>
        <View className="self-center w-[80%] border-b-[1px] opacity-10"></View>
        <Text className="self-center text-azul text-[16px]">
          Aceita em 08/01/2024
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

export default InfoConsultaAceita;
