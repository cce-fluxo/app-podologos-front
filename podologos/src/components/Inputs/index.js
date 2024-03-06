import React, { TextInput } from "react-native";

export default function Input(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      className="bg-cinza opacity-20 w-[87%] h-[50px] rounded-[12px] text-branco"
    ></TextInput>
  );
}
