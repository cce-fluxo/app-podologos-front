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

export default function FormacaoPodologo() {
  const [data, setData] = useState({
    instituicao: "",
    anoConclusao: "",
    tipoFormacao: "",
  });

  const onSubmit = (data: any) => {};

  const column2 = [
    {
      name: "instituicao",
      placeholder: "Instituição*",
      component: Input,
    },
    {
      name: "anoConclusao",
      placeholder: "Ano de conclusão*",
      component: Input,
    },
    {
      name: "tipoFormacao",
      placeholder: "Tipo de formação*",
      component: Input,
    },
  ];

  return (
    <SafeAreaView className="h-full w-full flex flex-col items-center bg-branco">
      <Header text="Formação"></Header>
      <ScrollView className="w-full">
        <FormData.Root onSubmit={onSubmit}>
          <FormData.Form columns={column2} id="formQuestion">
            <Button
              className="bg-branco border-azul border-[1px] self-center mt-2"
              text="text-azul"
              placeholder="Adicionar diploma"
            >
              <MaterialIcons name="add" size={20} color="#2087ED" />
            </Button>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
