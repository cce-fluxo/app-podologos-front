import React, { TextInput } from "react-native";

export default function Input({ placeholder }) {
  return (
    <TextInput
      placeholder={placeholder}
      className="bg-cinza opacity-20 w-[87%] h-14 mt-6 rounded-[12px] p-4 text-black/30"
    ></TextInput>
  );
}
