import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../../../components/Header";
import { Button } from "../../../../components/Button";
import CustomRadioButton from "../../../../components/RadioButton";



function DenunciaPaciente() {
  const [selectedId, setSelectedId] = useState<string | undefined>("first");

  const radioButtons = useMemo(
    () => [
      {
        id: "1", 
        label: "Higiene Inadequada",
        value: "option1",
      },
      {
        id: "2",
        label: "Equipamento Danificado",
        value: "option2",
      },
      {
        id: "3",
        label: "Lesões Físicas",
        value: "option2",
      },
      {
        id: "4",
        label: "Atraso ou Não Comparecimento",
        value: "option2",
      },
      {
        id: "5",
        label: "Falta de Profissionalismo",
        value: "option2",
      },
      {
        id: "6",
        label: "Diagnóstico Errôneo",
        value: "option2",
      },
      {
        id: "7",
        label: "Cobrança Indevida",
        value: "option2",
      },
      {
        id: "8",
        label: "Outro",
        value: "option2",
      },
    ],
    []
  );

  return (
    <SafeAreaView className="flex min-h-screen w-full bg-branco">
      <Header text="Confirmar denúncia"></Header>
      <ScrollView className="">
        <View className="flex w-full mb-10 justify-center ml-6">
          {radioButtons.map((radio, index) => (
            <View className="flex items-start justify-center space-y-8  " >
              <CustomRadioButton
                key={index}
                label={radio.label}
                onPress={() => setSelectedId(radio.id)}
                selected={selectedId === radio.id}
              />
              <View className="w-full items-center h-[1px] bg-cinza"></View>
            </View>
            
          ))}
          
        </View>
        <View className="w-full flex items-center space-y-4">
          <Button placeholder="Avaliar"></Button>
          <Button
            className=" bg-white border-2 border-azul"
            text="text-azul text-[16px]"
            placeholder="Cancelar"
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DenunciaPaciente;
