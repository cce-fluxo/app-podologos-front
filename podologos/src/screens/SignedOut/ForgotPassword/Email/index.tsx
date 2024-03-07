import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView, Text, View } from "react-native";
import Input from "../../../../components/Inputs";
import { Button } from "../../../../components/Button";

function Email() {
  return (
    <View className="flex-col items-center justify-between ">
      <View></View>

      <View className="flex h-screen w-screen justify-center items-center ">
        <Text className="text-[#4F5450] font-bold text-[24px] mb-4">
          Insira seu e-mail
        </Text>
        <Text className="text-[14px] m-4">
          Informe o email cadastrado e um email com as instruções de recuperação
          será enviado.{" "}
        </Text>
        <Input placeholder="Email"></Input>
      </View>

      <View className="flex">
        <Button></Button>
      </View>
    </View>
  );
}

export default Email;
