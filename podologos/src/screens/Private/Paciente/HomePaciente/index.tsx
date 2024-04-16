import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import HomePacienteImage from "../../../../assets/HomePacienteImage.png";
import { Button } from "../../../../components/Button";

export default function HomePaciente() {
  return (
    <SafeAreaView className="flex w-full h-full">
      <ImageBackground
        source={HomePacienteImage}
        alt=""
        className="flex justify-end items-center space-y-10 w-full h-full"
      >
        <View className="w-[90%] justify-center">
          <Text className="text-[25px] text-azul_escuro">Bem vindo,</Text>
          <Text className="text-[25px] text-azul_escuro font-bold">Tiago</Text>
        </View>
        <Text className="w-[90%] text-branco text-[16px]">
          Encontre podólogos experientes perto de você para proporcionar o
          cuidado que seus pés merecem.
        </Text>
        <Button placeholder="Nova consulta" className="mb-8"></Button>
      </ImageBackground>
    </SafeAreaView>
  );
}
