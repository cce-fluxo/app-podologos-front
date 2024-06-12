import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FormData } from "../../../components/FormData/Index";
import { useState } from "react";
import Input from "../../../components/FormData/InputForm";
import { Button } from "../../../components/Button";
import Header from "../../../components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { api } from "../../../services/api";
import Checkbox from "expo-checkbox";
import { CadastroSchema } from "../../../components/Schemas";

export default function CadastroPaciente() {
  const [isChecked, setIsChecked] = useState(false);

  async function signUp(data: object) {
    try {
      const response = await api.post("/patient/registrar-paciente", data);
      console.log(response.data);
      return response.data;
    } catch (err: any) {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }

  const [data, setData] = useState({
    // foto: "",
    first_name: "",
    last_name: "",
    email: "",
    encrypted_password: "",
    phone_number: "",
    birth_date: "1999-12-31",
    cep: "",
    // confirmarSenha: "",
    address_num: "42",
  });
  const column = [
    {
      name: "first_name",
      placeholder: "Nome*",
      component: Input,
    },
    { name: "last_name", placeholder: "Sobrenome*", component: Input },
    { name: "email", placeholder: "Email*", component: Input },
    { name: "phone_number", placeholder: "Telefone*", component: Input },
    { name: "cep", placeholder: "CEP*", component: Input },
    { name: "encrypted_password", placeholder: "Senha*", component: Input },
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
        <FormData.Root
          // schema={CadastroSchema}
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            encrypted_password: "",
            phone_number: "",
            birth_date: "1999-12-31",
            cep: "",
            confirmarSenha: "",
            address_num: "42",
          }}
          onSubmit={(data) => {
            {
              signUp(data), console.log(data);
            }
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: "self-center mt-2",
              placeholder: "Criar conta",
            }}
            columns={column}
            id="formQuestion"
          >
            <View className="flex flex-row items-center w-[90%] self-center ">
              <Checkbox
                className="ml-4 "
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? "#2087ED" : undefined}
              ></Checkbox>
              <Text className="ml-4">
                Declaro que li e concordo com os Termos e Condições
              </Text>
            </View>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
