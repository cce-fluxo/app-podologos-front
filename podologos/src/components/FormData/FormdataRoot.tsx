import { Formik } from "formik";
import React from "react";
import { twMerge } from "tailwind-merge";
import { View } from "react-native";

interface FormDataProps {
  onSubmit: (data: any) => void;
  initialValues?: object;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  schema?: any;
}

function FormDataRoot({
  className,
  children,
  onSubmit,
  initialValues = {},
  schema,
}: FormDataProps) {
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div id="select" className={twMerge("w-full h-full", className)}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(data) => {
          console.log(data);
          onSubmit(data);
        }}
        validationSchema={schema}
      >
        {({ isSubmitting, handleChange, values, errors, touched }) => (
          <React.Fragment>
            {children &&
              childrenArray.map((child: any, index: any) =>
                React.cloneElement(child as React.ReactElement<any>, {
                  key: index,
                  errors,
                  touched,
                })
              )}
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}

export default FormDataRoot;
