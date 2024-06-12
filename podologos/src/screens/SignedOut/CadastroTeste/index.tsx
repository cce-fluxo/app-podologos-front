import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { Formik, Field, Form } from "formik";
import Input from "../../../components/Inputs";
import { Button } from "../../../components/Button";
import Header from "../../../components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { api } from "../../../services/api";
import Checkbox from "expo-checkbox";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  sobrenome: Yup.string()
    .min(3, "Mínimo de 3 letras")
    .required("Sobrenome é obrigatório"),
});

export default function CadastroTeste() {
  const [isChecked, setIsChecked] = useState(false);

  async function signUp(data: object) {
    try {
      console.log("teste");
      const response = await api.post("/patient/registrar-paciente", data);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }

  return (
    <SafeAreaView className="h-full w-full flex flex-col items-center bg-branco">
      <Header text="Nova conta" />
      <ScrollView className="w-full flex">
        <Button
          className="bg-branco border-azul border-[1px] self-center"
          text="text-azul"
          placeholder="Adicionar foto de perfil"
        >
          <MaterialIcons name="add" size={20} color="#2087ED" />
        </Button>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{
            nome: "",
            sobrenome: "",
            email: "",
            encrypted_password: "",
            phone_number: "",
            birth_date: "1999-12-31",
            cep: "",
            confirmarSenha: "",
            address_num: "42",
          }}
          //   validationSchema={CadastroSchema}
          onSubmit={(values) => {
            console.log(values);
            signUp(values);
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
            <View className="flex gap-2 space-y-4 mt-3 justify-center w-full ">
              {/* Div do nome  */}
              <View className="">
                <Input
                  onChangeText={handleChange("nome")}
                  onBlur={handleBlur("nome")}
                  value={values.nome}
                  placeholder="Nome*"
                  keyboardType="default"
                />
                {touched.nome && errors.nome && (
                  <Text className="text-red-600 ml-8">{errors.sobrenome}</Text>
                )}
              </View>
              <View className="">
                <Input
                  onChangeText={handleChange("sobrenome")}
                  onBlur={handleBlur("sobrenome")}
                  value={values.sobrenome}
                  placeholder="Sobrenome*"
                  keyboardType="default"
                />
                {touched.sobrenome && errors.sobrenome && (
                  <Text className="text-red-600 ml-8">{errors.sobrenome}</Text>
                )}
              </View>
              <View className="flex flex-row items-center w-[90%] self-center">
                <Checkbox
                  className="ml-4"
                  value={isChecked}
                  onValueChange={setIsChecked}
                  color={isChecked ? "#2087ED" : undefined}
                />
                <Text className="ml-4">
                  Declaro que li e concordo com os Termos e Condições
                </Text>
              </View>
              <Button
                className="border-[1px] self-center"
                placeholder="Criar conta"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
