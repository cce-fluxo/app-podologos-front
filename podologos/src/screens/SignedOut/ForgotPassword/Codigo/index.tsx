import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView, Text, View } from "react-native";
import Input from "../../../../components/Inputs";
import { Button } from "../../../../components/Button";
import PageTitle from "../../../../components/Header";

function Codigo() {
  return (
    <View className="h-full w-full flex flex-col items-center justify-between">
      <PageTitle text="Recuperar senha"></PageTitle>

      <View className="flex w-full justify-center items-center ">
        <Text className="text-[#4F5450] font-bold text-[24px] mb-4">
          Verifique seu e-mail
        </Text>
        <Text className="text-[14px] m-4">
          Digite o código enviado para o e-mail loremipsum@gmail.com
        </Text>
        <Input placeholder="Código"></Input>
      </View>

      <Button placeholder="Enviar"></Button>
    </View>
  );
}

export default Codigo;
