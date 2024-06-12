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
import FundoLogin from "../../../assets/FundoLogin.png";

function PreLogin({ navigation }) {
  // const navigation = useNavigation();
  // function openScreen() {
  //   navigation.navigate("Login");
  // }

  return (
    <SafeAreaView className="flex  w-screen h-screen mt-14 ">
      <ImageBackground className="flex  h-screen w-screen" source={FundoLogin}>
        <View className="flex items-center justify-around h-full w-full space-y-2">
          <View></View>

          <Text className="font-bold max-w-[80%]  text-branco text-[32px]  ">
            O atendimento e conforto para os seus pés
          </Text>

          <View className="mb-10 flex w-full max-w-[87%] items-center space-y-2">
            <Button
              className="flex mt-10"
              text="text-branco text-[16px]"
              placeholder="Podólogo"
              onPress={() => {
                navigation.navigate("CadastroPodologo");
              }}
            ></Button>
            <Button
              className=" "
              text="text-branco text-[16px]"
              placeholder="Paciente"
              onPress={() => {
                navigation.navigate("CadastroPaciente");
              }}
            ></Button>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text className="text-branco text-[15px]">
                Já possuo cadastro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default PreLogin;
