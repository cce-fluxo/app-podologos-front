import React from "react";
import { Form, Field } from "formik";
import { View, Text } from "react-native";

interface FromDataProps {
  columns: Col[];
  id?: any;
  className?: string;
  children?: React.ReactNode;
  errors?: any;
  touched?: any;
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
              <Text className="text-red-600">{errors[col.name]}</Text>
            )}
          </View>
        </View>
      ))}
      {children}
    </View>
  );
}

export default FormdataForm;
