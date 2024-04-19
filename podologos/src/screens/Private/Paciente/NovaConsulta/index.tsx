import { SafeAreaView, Text, View } from "react-native";
import Header from "../../../../components/Header";
import { Button } from "../../../../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../../../../components/Inputs";

export default function NovaConsulta() {
  return (
    <SafeAreaView className="flex w-full h-full bg-branco">
      <Header text="Nova consulta"></Header>
      <View className="flex justify-between h-full px-5">
        <View className="flex space-y-4">
          <Button
            className="bg-branco border-azul border-[1px] w-full self-center"
            text="text-azul"
            placeholder="Adicionar foto de perfil"
          >
            <MaterialIcons name="add" size={20} color="#2087ED" />
          </Button>
          <Text className="text-[23px] text-[#46555A] font-semibold">
            Observações
          </Text>
          <Input className="w-full" placeholder="Lorem Ipsum"></Input>
          <Text className="text-[23px] text-[#46555A] font-semibold">
            Formulário médico
          </Text>
          <Button
            className="bg-branco border-azul border-[1px] w-full self-center"
            text="text-azul"
            placeholder="Editar ficha de anamnese"
          ></Button>
        </View>
        <Button className="w-full mb-20" placeholder="Enviar"></Button>
      </View>
    </SafeAreaView>
  );
}
