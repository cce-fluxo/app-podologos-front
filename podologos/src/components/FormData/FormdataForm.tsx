import React from "react";
import { Form, Field } from "formik";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "../Button";

interface FromDataProps {
  columns: Col[];
  id?: any;
  className?: string;
  children?: React.ReactNode;
  errors?: any;
  touched?: any;
  handleSubmit?: any;
  ButtonStyles?: any;
  retornavel: boolean;
}
interface Col {
  type?: string;
  name: string;
  placeholder: string;
  component: any;
  options?: string[];
}

function FormdataForm({
  columns,
  id,
  className,
  children,
  errors,
  touched,
  handleSubmit,
  ButtonStyles,
  retornavel,
}: FromDataProps) {
  return (
    <View className="flex w-full" id={id}>
      {columns.map((col: Col, index) => (
        <View key={index} className="mt-2 mb-2">
          <View>
            <Field
              name={col.name}
              type={col.type}
              placeholder={col.placeholder}
              options={col.options}
              {...col}
            />
            {touched[col.name] && errors[col.name] && (
              <Text className="text-red-600 ml-8">{errors[col.name]}</Text>
            )}
          </View>
        </View>
      ))}
      {children}
      {retornavel ? (
        <Button {...ButtonStyles} onPress={handleSubmit}></Button>
      ) : (
        <></>
      )}
    </View>
  );
}

export default FormdataForm;
