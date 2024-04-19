import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import { Button } from "../../../../components/Button";
import Header from "../../../../components/Header";
import { Entypo } from "@expo/vector-icons";
import PerfilImage from "../../../../assets/PerfilImage.png";
import Input from "../../../../components/Inputs";
import { FormData } from "../../../../components/FormData/Index";
import { useState } from "react";

export default function EditarPodologo() {
  const [data, setData] = useState({
    foto: "",
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cep: "",
    formacao: "",
    instituicao: "",
    anoConclusao: "",
    tipoFormacao: "",
  });

  const onSubmit = (data: any) => {};

  const column = [
    {
      name: "nome",
      texto: "Nome",
      placeholder: "João",
      component: Input,
    },
    {
      name: "sobrenome",
      texto: "Sobrenome",
      placeholder: "de Oliveira",
      component: Input,
    },
    {
      name: "email",
      texto: "Email",
      placeholder: "giovannisouza@gmail.com",
      component: Input,
    },
    {
      name: "telefone",
      texto: "Telefone",
      placeholder: "(21) 12345-6789",
      component: Input,
    },
    { name: "cep", texto: "CEP", placeholder: "12345-678", component: Input },
    {
      name: "formacao",
      texto: "Formação",
      placeholder: "Podologia",
      component: Input,
    },
    {
      name: "instituicao",
      texto: "Instituição",
      placeholder: "UFRJ",
      component: Input,
    },
    {
      name: "anoConclusao",
      texto: "Ano de conclusão",
      placeholder: "2022",
      component: Input,
    },
    {
      name: "tipoFormacao",
      placeholder: "Superior",
      component: Input,
    },
  ];
  return (
    <SafeAreaView className="flex w-full bg-branco">
      <Header text="Perfil"></Header>
      <ScrollView>
        <View className="flex items-center justify-center">
          <Image className="" source={PerfilImage}></Image>
          <View className="flex flex-row items-center justify-center bg-zinc-200 mt-3 rounded-md p-1">
            <Entypo name="star" size={20} color="black" />
            <Text className="font-semibold">4.75</Text>
          </View>
        </View>

        <FormData.Root onSubmit={onSubmit}>
          <FormData.Form columns={column} id="formQuestion">
            <Button
              className="self-center mt-2"
              placeholder="Criar conta"
            ></Button>
            <Button
              className="self-center mt-2 bg-branco border-[1px] border-azul mb-20"
              placeholder="Formação"
              text="text-azul"
            ></Button>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
