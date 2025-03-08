import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/Header';
import { FormData } from '../../../components/FormData/Index';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import Checkbox from 'expo-checkbox';
import { useRef, useState } from 'react';
import { Formik } from 'formik';
import InputCheckbox from '../../../components/InputCheckbox';
import { Dropdown } from 'react-native-element-dropdown';

export default function Deformidades({ route, navigation }) {
  let formikRef = useRef(null);

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  function handleFormSubmit(values) {
    const infoDeformidades = values;
    navigation.navigate('Limitacoes', { 
      infoDadosPessoais: route.params.infoDadosPessoais, 
      infoAvaliacao: route.params.infoAvaliacao, 
      infoMotivoVisita: route.params.infoMotivoVisita,
      infoDeformidades });
  }

  const initialValues = {
    claw_toes: false,
    bunion: false,
    hammer_toes: false,
    amputation: false,
    edema: false,
  };

  const checkboxes = [
    { nome: "Dedos em Garra", valueName: "claw_toes" },
    { nome: "Joanete", valueName: "bunion" },
    { nome: "Dedos em Martelo", valueName: "hammer_toes" },
    { nome: "Amputações", valueName: "amputation" },
    { nome: "Edema (inchaço nas pernas)", valueName: "edema" }
];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full'>
        <View className='flex items-center'>
          <Text className='mb-2 w-[90%] text-[20px] font-semibold text-titulo_anamnese'>
            Deformidades
          </Text>

          <View className='w-full'>
            <Formik
              innerRef={formikRef}
              // validationSchema={LoginSchema}
              initialValues={initialValues}
              onSubmit={(values) => {
                handleFormSubmit(values);
                console.log(values);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldValue
              }) => (
                <View className='mt-3 flex w-full items-center justify-center space-y-2'>
                  {checkboxes.map((item, index) => 
                    <InputCheckbox
                      key={index}
                      texto={item.nome} 
                      value={values[item.valueName]} 
                      onValueChange={(value) => setFieldValue(item.valueName, value)} 
                    />
                  )}
                </View>
              )}
            </Formik>
          </View>

          <Button className='self-center mb-4' placeholder='Continuar' onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
