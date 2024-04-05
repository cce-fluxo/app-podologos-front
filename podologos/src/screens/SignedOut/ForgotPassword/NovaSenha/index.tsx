import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView, Text, View } from "react-native";
import Input from "../../../../components/Inputs";
import { Button } from "../../../../components/Button";
import PageTitle from "../../../../components/Header";

function NovaSenha() {
  return (
    <View className="h-full w-full flex flex-col items-center justify-between">
      <PageTitle text="Nova Senha"></PageTitle>

      <View className="flex w-full justify-center items-center ">
        <Text className="text-[#4F5450] font-bold text-[24px] mb-4">
          Redefina sua senha
        </Text>
        <Input placeholder="Nova Senha"></Input>
        <Input placeholder="Confirmar nova senha"></Input>
      </View>

      <Button placeholder="Redefinir senha"></Button>
    </View>
  );
}

export default NovaSenha;
