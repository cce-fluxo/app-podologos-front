import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Input from "../../../../components/Inputs";
import { Button } from "../../../../components/Button";
import PageTitle from "../../../../components/Header";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { EmailSchema } from "../../../../components/Schemas";

function Email() {
  const navigation = useNavigation();

  let formikRef = React.useRef(null);
  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const handleFormSubmit = (values) => {
    console.log("Enviando e-mail para:", values.email);
    navigation.navigate("Codigo");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 w-full justify-center items-center ">
        <Text className="text-[#4F5450] font-bold text-[20px] mb-4 flex ">
          Insira seu e-mail
        </Text>
        <View className="w-full ml-4">
          <Text className="text-[14px] m-4">
            Informe o email cadastrado e um email com as instruções de
            recuperação será enviado.
          </Text>
        </View>
        <Formik
          validationSchema={EmailSchema}
          innerRef={formikRef}
          initialValues={{
            email: "",
          }}
          onSubmit={(values) => {
            handleFormSubmit(values);
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
            <View className="flex w-full justify-between items-center space-y-6 ">
              {/* Div do email  */}
              <View className="flex w-full">
                <Input
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email*"
                  keyboardType="default"
                />
                {touched.email && errors.email && (
                  <Text className="text-red-600 ml-6">
                    {String(errors.email)}
                  </Text>
                )}
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View className="w-full items-center justify-center mb-10">
        <Button
          onPress={handleSubmit}
          text="text-white text-[16px]"
          className="items-center"
          placeholder="Enviar"
        />
      </View>
    </SafeAreaView>
  );
}

export default Email;
