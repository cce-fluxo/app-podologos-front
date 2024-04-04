import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PreLoginImage from "../../../assets/PreLoginImage.png";
import { Button } from "../../../components/Button";
import ModalSimNao from "../../../components/ModalSimNao";
import ModalOk from "../../../components/ModalOk";
import ModalDenuncia from "../../../components/ModalDenuncia";
import ModalAdicionarFoto from "../../../components/ModalAdicionarFoto";
import { useNavigation } from "@react-navigation/native";

function PreLogin({ navigation }) {
  // const navigation = useNavigation();
  // function openScreen() {
  //   navigation.navigate("Login");
  // }

  const [modalVisible, setModalVisible] = React.useState(false);

  function closeModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }

  return (
    <SafeAreaView className="flex  w-screen h-screen mt-14 ">
      <ImageBackground
        className="flex  h-screen w-screen"
        source={PreLoginImage}
      >
        <View className="flex items-center justify-around h-full w-full space-y-2">
          <View></View>

          <Text className="font-bold max-w-[80%]  text-branco text-[32px]  ">
            O atendimento e conforto para os seus pés
          </Text>

          <View className="mb-10 flex w-full max-w-[87%] items-center space-y-2">
            <Button
              onClick={openModal}
              className="flex mt-10"
              text="text-branco text-[16px]"
              placeholder="Podólogo"
            ></Button>
            <Button
              className=" "
              text="text-branco text-[16px]"
              placeholder="Paciente"
              onPress={() => {
                navigation.navigate("Login");
              }}
            ></Button>
            <TouchableOpacity>
              <Text className="text-branco text-[15px]">
                Já possuo cadastro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <ModalSimNao
        modalVisible={modalVisible}
        mensagem="Adicionar foto de perfil"
        onNoClick={closeModal}
      ></ModalSimNao>
    </SafeAreaView>
  );
}

export default PreLogin;
