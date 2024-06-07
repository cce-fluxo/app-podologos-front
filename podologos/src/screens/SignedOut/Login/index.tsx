import React, { useContext } from "react";
import { Text, View } from "react-native";
import Input from "../../../components/Inputs";
import { Button } from "../../../components/Button";
import { StatusBar } from "expo-status-bar";
import AuthContext from "../../../context/AuthContext";
import { FormData } from "../../../components/FormData/Index";
import ToastManager from "toastify-react-native";


function Login() {
  const { signed, signIn, user } = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  async function handleSignIn(values: any) {
    const User = {
      email: values.email,
      password: values.password,
    };
    console.log("Logar");
    signIn(User);
  }

  const columns = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      component: Input,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      component: Input,
    },
  ];

  return (
    <View className="flex-1 justify-center items-center gap-4 bg-white">
      <FormData.Root onSubmit={handleSignIn}>
        <FormData.Form columns={columns} id="formQuestion"></FormData.Form>
      </FormData.Root>

      <Text className="text-azul">Esqueci minha senha</Text>
      <Button
        className=""
        text=" text-[16px]"
        placeholder="Entrar"
        form={"formLogin"}
        type={"submit"}
      ></Button>
      <Button
        className=" bg-white border-2 border-azul"
        text="text-azul text-[16px]"
        placeholder="Nova conta"
      ></Button>
      <StatusBar style="auto" />
      <ToastManager />
    </View>
  );
}

export default Login;
