import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FormData } from "../../../components/FormData/Index";
import { useState } from "react";
import Input from "../../../components/Inputs";
import { Button } from "../../../components/Button";
import Header from "../../../components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { api } from "../../../services/api";

export default function CadastroPaciente() {
  async function onSubmit(data: object) {
    try {
      const response = await api.post("/auth/signin", data);

      return response.data;
    } catch (error: any) {
      error?.response?.data?.message[0];
      console.log(error);
    }
  }

  const [data, setData] = useState({
    foto: "",
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    senha: "",
    confirmarSenha: "",
  });

  const column = [
    {
      name: "nome",
      placeholder: "Nome*",
      component: Input,
    },
    { name: "sobrenome", placeholder: "Sobrenome*", component: Input },
    { name: "email", placeholder: "Email*", component: Input },
    { name: "telefone", placeholder: "Telefone*", component: Input },
    { name: "cep", placeholder: "CEP*", component: Input },
    { name: "senha", placeholder: "Senha*", component: Input },
    {
      name: "confirmarSenha",
      placeholder: "Confirmar senha*",
      component: Input,
    },
  ];

  return (
    <SafeAreaView className="h-full w-full flex flex-col items-center bg-branco">
      <Header text="Nova conta"></Header>
      <ScrollView className="w-full">
        <Button
          className="bg-branco border-azul border-[1px] self-center"
          text="text-azul"
          placeholder="Adicionar foto de perfil"
        >
          <MaterialIcons name="add" size={20} color="#2087ED" />
        </Button>
        <FormData.Root onSubmit={onSubmit}>
          <FormData.Form columns={column} id="formQuestion">
            <View className="flex flex-row items-center w-[90%] self-center">
              <Text>Declaro que li e concordo com os Termos e Condições</Text>
            </View>
            <Button
              className="self-center mt-2"
              placeholder="Continuar"
            ></Button>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
