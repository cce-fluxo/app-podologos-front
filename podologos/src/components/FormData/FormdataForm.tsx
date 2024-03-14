import React from "react";
import { Form, Field } from "formik";
import { twMerge } from "tailwind-merge";
import { View } from "react-native";

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
    <Form className="w-full" id={id}>
      <View className={twMerge("flex flex-col", className)}>
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
                <p className="text-red-600">{errors[col.name]}</p>
              )}
            </View>
          </View>
        ))}
        {children}
      </View>
    </Form>
  );
}

export default FormdataForm;
