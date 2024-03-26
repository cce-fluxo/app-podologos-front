import { SafeAreaView, Text, View } from "react-native";
import PageTitle from "../../../components/PageTitle";
import { FormData } from "../../../components/FormData";
import { useState } from "react";
import Input from "../../../components/Inputs";
import { Button } from "../../../components/Button";

export default function CadastroPaciente() {
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

  const onSubmit = (data: any) => {};

  const column1 = [{ name: "nome", placeholder: "Nome*", component: Input }];

  const column2 = [
    { name: "nome", placeholder: "Nome*", component: Input },
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
    <SafeAreaView className="h-screen w-screen flex flex-col items-center justify-between">
      <PageTitle text="Nova conta"></PageTitle>
      <FormData.Root onSubmit={onSubmit}>
        <FormData.Form columns={column1} id="formQuestion">
          <Button
            className="bg-branco border-azul border-2"
            texto="text-azul"
            placeholder="+ Adicionar foto de perfil"
          ></Button>
        </FormData.Form>
        <FormData.Form columns={column2} id="formQuestion">
          <Button
            className="bg-branco border-azul border-2"
            texto="text-azul"
            placeholder="Preencher ficha de anamnese"
          ></Button>
          <View className="flex flex-row items-center">
            <Text>Declaro que li e concordo com os Termos e Condições</Text>
          </View>
        </FormData.Form>
      </FormData.Root>
    </SafeAreaView>
  );
}
