import { SafeAreaView, Text, View } from "react-native";
import Input from "../../../../components/Inputs";
import { Button } from "../../../../components/Button";
import { Formik } from "formik";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function Codigo() {
  const navigation = useNavigation();

  let formikRef = React.useRef(null);
  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const handleFormSubmit = (values) => {
    navigation.navigate("NovaSenha");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 w-full justify-center items-center ">
        <Text className="text-[#4F5450] font-bold text-[20px] mb-4 flex ">
          Verifique seu e-mail
        </Text>
        <View className="w-full items-start ml-4">
          <Text className="text-[14px] m-4">
            Digite o código enviado para o e-mail
          </Text>
        </View>
        <Formik
          innerRef={formikRef}
          initialValues={{
            codigo: "",
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
              {/* Div do codigo  */}
              <View className="flex w-full">
                <Input
                  onChangeText={handleChange("codigo")}
                  onBlur={handleBlur("codigo")}
                  value={values.codigo}
                  placeholder="Código*"
                  keyboardType="default"
                />
                {touched.codigo && errors.codigo && (
                  <Text className="text-red-600 ml-6">
                    {String(errors.codigo)}
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

export default Codigo;
