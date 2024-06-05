import React, { useContext } from "react";
import { Text, View } from "react-native";
import Input from "../../../components/Inputs";
import { Button } from "../../../components/Button";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../../../context/AuthContext";

function Login() {
  const { signIn } = useContext(AuthContext);

  const onSubmit = async (email: any, password: string) => {
    const User = {
      email: email,
      password: password,
    };
    signIn(User);
  };

  return (
    <View className="flex-1 justify-center items-center gap-4 bg-white">
      <Input placeholder="Entrar"></Input>
      <Input placeholder="Senha"></Input>

      <Text className="text-azul">Esqueci minha senha</Text>
      <Button
        className=""
        text=" text-[16px]"
        placeholder="Entrar"
        onClick={() => {
          onSubmit("luis@gmail.com", "123456");
        }}
      ></Button>
      <Button
        className=" bg-white border-2 border-azul"
        text="text-azul text-[16px]"
        placeholder="Nova conta"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default Login;
