import React from "react";
import { Text, View } from "react-native";

type ProfileInfoProps = {
  label: string;
  text: string;
};

function ProfileInfo({ label, text }: ProfileInfoProps) {
  return (
    <View className="flex mb-3 ">
      <Text className="font-semibold text-sm">{label}</Text>
      <Text className="text-cinza font-bold text-[16px]">{text}</Text>
    </View>
  );
}

export default ProfileInfo;
