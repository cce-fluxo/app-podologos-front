import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../Button";

interface PopUpProps {
  texto: string;
  onClick: Function;
}

function PopUp({ texto, onClick }: PopUpProps) {
  return (
    <View className="absolute w-full h-full bg-[#0000006a] flex justify-center items-center z-10">
      <View className="flex justify-around items-center w-[85%] h-[16%] bg-branco rounded-[15px]">
        <Text className="flex-1 p-2 text-center">{texto}</Text>
        <Button
          className="h-2/5 bg-branco border-t-[1px] rounded-none"
          texto="text-azul"
          placeholder="Ok"
          onClick={onClick}
        ></Button>
      </View>
    </View>
  );
}

export default PopUp;
