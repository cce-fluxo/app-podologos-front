import React, { TextInput } from "react-native";
import { styled } from "nativewind";

function InputStyled({ placeholder, ...rest }) {
  return (
    <TextInput
      placeholder={placeholder}
      className="bg-cinza/20 w-[90%] h-14 mt-6 rounded-[12px] p-4 text-black"
      {...rest}
    ></TextInput>
  );
}

const Input = styled(InputStyled);
export default Input;
