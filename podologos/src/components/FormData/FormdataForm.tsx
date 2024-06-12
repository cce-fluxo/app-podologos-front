import React from "react";
import { Form, Field } from "formik";
import { View, Text, TouchableOpacity } from "react-native";

interface FromDataProps {
  columns: Col[];
  id?: any;
  className?: string;
  children?: React.ReactNode;
  errors?: any;
  touched?: any;
  handleSubmit?: any;
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
}: FromDataProps) {
  return (
    <View className="flex w-full" id={id}>
      {columns.map((col: Col, index) => (
        <View key={index} className="mt-2 mb-2">
          <View>
            <Field
              type={col.type}
              label={col.placeholder}
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
      <TouchableOpacity
        className="bg-black w-16 h-16"
        onPress={handleSubmit}
      ></TouchableOpacity>
    </View>
  );
}

export default FormdataForm;
