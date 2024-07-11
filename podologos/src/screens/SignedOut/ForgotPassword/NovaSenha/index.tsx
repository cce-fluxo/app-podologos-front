import { SafeAreaView, Text, View } from "react-native";
import Input from "../../../../components/Inputs";
import { Button } from "../../../../components/Button";
import { Formik } from "formik";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NovaSenhaSchema } from "../../../../components/Schemas";
import ModalOk from "../../../../components/ModalOk";

function NovaSenha() {
  const [modalVisible, setModalVisible] = React.useState(false);

  function closeModal() {
    setModalVisible(false);
    navigation.navigate("Login");
  }
  function openModal() {
    setModalVisible(true);
  }

  const navigation = useNavigation();

  let formikRef = React.useRef(null);

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const handleFormSubmit = ({ values }: any) => {
    openModal();
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 w-full justify-center items-center ">
        <Text className="text-[#4F5450] font-bold text-[20px] mb-6 flex ">
          Redefina sua senha
        </Text>

        <Formik
          validationSchema={NovaSenhaSchema}
          innerRef={formikRef}
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            const submissionValues = { password: values.password };
            handleFormSubmit(submissionValues);
            console.log(submissionValues);
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
            <View className="flex w-full justify-between items-center space-y-4 ">
              {/* Div da NovaSenha */}
              <View className="flex w-full">
                <Input
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Nova senha*"
                  keyboardType="default"
                />
                {touched.password && errors.password && (
                  <Text className="text-red-600 ml-6">
                    {String(errors.password)}
                  </Text>
                )}
              </View>
              <View className="flex w-full">
                <Input
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  placeholder="Confirmar nova senha*"
                  keyboardType="default"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text className="text-red-600 ml-6">
                    {String(errors.confirmPassword)}
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
          placeholder="Redefinir senha"
        />
      </View>
      <ModalOk
        modalVisible={modalVisible}
        mensagem="Senha redefinida com sucesso!"
        onOkClick={closeModal}
      ></ModalOk>
    </SafeAreaView>
  );
}

export default NovaSenha;
