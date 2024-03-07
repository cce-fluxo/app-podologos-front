import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView, Text, View } from "react-native";
import Input from "../../../../components/Inputs";
import { Button } from "../../../../components/Button";
import PageTitle from "../../../../components/PageTitle";

function Email() {
  return (
    <View className="h-screen w-screen flex flex-col items-center justify-between">
      <PageTitle text="Esqueci minha senha"></PageTitle>

      <View className="flex w-full justify-center items-center ">
        <Text className="text-[#4F5450] font-bold text-[24px] mb-4">
          Insira seu e-mail
        </Text>
        <Text className="text-[14px] m-4">
          Informe o email cadastrado e um email com as instruções de recuperação
          será enviado.{" "}
        </Text>
        <Input placeholder="Email"></Input>
      </View>

      <Button placeholder="Enviar"></Button>
    </View>
  );
}

export default Email;
