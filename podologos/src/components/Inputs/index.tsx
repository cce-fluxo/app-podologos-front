import React, { TextInput } from "react-native";

export default function Input({ placeholder }) {
  return (
    <TextInput
      placeholder={placeholder}
      className="bg-cinza/20 w-[90%] h-14 mt-6 rounded-[12px] p-4 text-black"
    ></TextInput>
  );
}
