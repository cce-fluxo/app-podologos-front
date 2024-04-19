import { SafeAreaView, ScrollView, Text } from "react-native";
import Header from "../../../components/Header";
import { FormData } from "../../../components/FormData/Index";
import Input from "../../../components/Inputs";
import { Button } from "../../../components/Button";

export default function Identificacao() {
  const onSubmit = (data: any) => {};

  const column = [
    {
      name: "nome",
      placeholder: "Data de Nascimento",
      className: "w-full",
      component: Input,
    },
    {
      name: "sobrenome",
      placeholder: "Naturalidade",
      className: "w-full",
      component: Input,
    },
    {
      name: "email",
      placeholder: "Selecione",
      className: "w-full",
      component: Input,
    },
    {
      name: "telefone",
      placeholder: "Profissão",
      className: "w-full",
      component: Input,
    },
    {
      name: "cep",
      placeholder: "Estado Civil",
      className: "w-full",
      component: Input,
    },
    {
      name: "senha",
      placeholder: "Moro",
      className: "w-full",
      component: Input,
    },
    {
      name: "confirmarSenha",
      placeholder: "Motivo da visita",
      className: "w-full",
      component: Input,
    },
  ];

  return (
    <SafeAreaView className="h-full w-full flex flex-col items-center bg-branco">
      <Header text="Ficha de anamnese"></Header>
      <ScrollView className="w-full px-5">
        <Text className="text-[20px] text-titulo_anamnese font-semibold mb-2">
          Identificação
        </Text>
        <FormData.Root onSubmit={onSubmit}>
          <FormData.Form columns={column} id="formQuestion">
            <Button
              className="self-center mt-2 w-full"
              placeholder="Continuar"
            ></Button>
            <Button
              className="bg-branco border-azul border-[1px] self-center w-full mt-4"
              text="text-azul"
              placeholder="Preencher mais tarde"
            ></Button>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
