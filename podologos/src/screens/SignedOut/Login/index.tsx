import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Input from "../../../components/Inputs";
import { Button } from "../../../components/Button";
import { StatusBar } from "expo-status-bar";
import AuthContext from "../../../context/AuthContext";
import ToastManager from "toastify-react-native";
import { Formik } from "formik";
import { LoginSchema } from "../../../components/Schemas";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const navigation = useNavigation();
  const { signed, signIn, user } = useContext(AuthContext);

  // console.log(signed);
  // console.log(user);

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
      <View className="w-full">
        <Formik
          validationSchema={LoginSchema}
          initialValues={{
            email: "",
            senha: "",
          }}
          onSubmit={(values) => {
            handleSignIn(values);
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View className="flex space-y-2 mt-3 w-full items-center justify-center ">
              {/* Div do email  */}
              <View className="w-full">
                <Input
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email*"
                  keyboardType="default"
                />
                {touched.email && errors.email && (
                  <Text className="text-red-600 ml-8">{errors.email}</Text>
                )}
              </View>
              <View className="w-full">
                <Input
                  onChangeText={handleChange("senha")}
                  onBlur={handleBlur("senha")}
                  value={values.senha}
                  placeholder="Senha*"
                  keyboardType="default"
                />
                {touched.senha && errors.senha && (
                  <Text className="text-red-600 ml-8">{errors.senha}</Text>
                )}
              </View>
              <View className="w-full items-center space-y-2">
                <TouchableOpacity onPress={() => navigation.navigate("Email")}>
                  <Text className="text-azul">Esqueci minha senha</Text>
                </TouchableOpacity>
                <Button
                  text=" text-[16px]"
                  className="items-center"
                  placeholder="Entrar"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <Button
        className=" bg-white border-2 border-azul"
        text="text-azul text-[16px]"
        placeholder="Nova conta"
        onPress={() => navigation.navigate("PreLogin")}
      ></Button>
      <StatusBar style="auto" />
      <ToastManager />
    </View>
  );
}

export default Login;
