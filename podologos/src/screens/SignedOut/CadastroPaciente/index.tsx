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
import TermosCondicoes from "../../../components/TermosCondicoes";
import * as ImagePicker from "expo-image-picker";
import ToastManager, { Toast } from "toastify-react-native";

export default function CadastroPaciente() {
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function signUp(data: object) {
    try {
      Toast.info("Aguarde...", "");
      const response = await api.post("/patient/registrar-paciente", data);
      Toast.success("Sucesso ao cadastrar");
      return response.data;
    } catch (err: any) {
      Toast.error("Erro no cadastro", "");
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }

  const [data, setData] = useState({
    profile_picture: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    cep: "",
    encrypted_password: "",
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
    { name: "password", placeholder: "Senha*", component: Input },
    {
      name: "confirmarSenha",
      placeholder: "Confirmar senha*",
      component: Input,
    },
  ];

  return (
    <SafeAreaView className="h-full w-full flex flex-col items-center bg-branco">
      <ScrollView className=" w-full">
        <Button
          className="bg-branco border-azul border-[1px] self-center w-[87%] mt-6 mb-4"
          text="text-azul"
          placeholder="Adicionar foto de perfil"
          onPress={pickImage}
        >
          <MaterialIcons name="add" size={20} color="#2087ED" />
        </Button>
        <FormData.Root
          // schema={CadastroSchema}
          initialValues={{
            profile_picture: "1",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            cep: "",
            password: "",
          }}
          onSubmit={(data) => {
            {
              signUp(data);
            }
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: "self-center mt-2 mb-10 w-[87%]",
              placeholder: "Criar conta",
            }}
            columns={column}
            id="formQuestion"
          >
            <View className="flex flex-row items-center w-[90%] self-center mt-4 mb-4 ">
              <Checkbox
                className="ml-4"
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? "#00C86F" : undefined}
              />
              <TermosCondicoes />
            </View>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
      <ToastManager position="center" />
    </SafeAreaView>
  );
}
