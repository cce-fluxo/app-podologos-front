import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import PerfilImage from "../../../../assets/PerfilImage.png";
import Header from "../../../../components/Header";
import ProfileInfo from "../../../../components/ProfileInfo";
import { Button } from "../../../../components/Button";
import Avaliacao from "../../../../components/Avaliacao";
import Input from "../../../../components/Inputs";

function PerfilDoPaciente() {
  const [notas, setNotas] = useState([
    "star-outlined",
    "star-outlined",
    "star-outlined",
    "star-outlined",
    "star-outlined",
  ]);

  function novaNota(valor: number) {
    const novasNotas = notas.map((nota, index) => {
      if (index < valor) {
        return "star";
      } else {
        return "star-outlined";
      }
    });

    setNotas(novasNotas);
  }

  return (
    <SafeAreaView className="flex w-full bg-branco">
      <Header text="Perfil do paciente"></Header>
      <ScrollView className="flex px-5 space-y-8">
        <View className="flex items-center justify-center">
          <Image className="" source={PerfilImage}></Image>
          <View className="flex flex-row items-center justify-center bg-cinza mt-3 rounded-md p-1 space-x-2">
            <Entypo name="star" size={20} color="black" />
            <Text className="font-semibold">4.75</Text>
          </View>
        </View>
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
        <View className="self-center w-[80%] border-b-[1px] opacity-10"></View>
        <View className="flex flex-row justify-between w-[75%] self-center">
          <TouchableOpacity onPress={() => novaNota(1)}>
            <Entypo name={notas[0]} size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => novaNota(2)}>
            <Entypo name={notas[1]} size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => novaNota(3)}>
            <Entypo name={notas[2]} size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => novaNota(4)}>
            <Entypo name={notas[3]} size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => novaNota(5)}>
            <Entypo name={notas[4]} size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Input className="w-[100%]" placeholder="Avaliação"></Input>
        <View className="w-full flex items-center space-y-4">
          <Button className="w-full" placeholder="Avaliar"></Button>
          <Button className="w-full" placeholder="Denunciar"></Button>
        </View>
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

export default PerfilDoPaciente;
