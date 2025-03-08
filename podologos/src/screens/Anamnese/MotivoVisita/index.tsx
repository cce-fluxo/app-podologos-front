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

export default function MotivoVisita({ route, navigation }) {
  let formikRef = useRef(null);

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  function handleFormSubmit(values) {
    const infoMotivoVisita = values;
    navigation.navigate('Deformidades', { infoDadosPessoais: route.params.infoDadosPessoais, infoAvaliacao: route.params.infoAvaliacao, infoMotivoVisita });
  }

  const initialValues = {
    ingrown_nail: false,
    nail_mycosis: false,
    plantar_mycosis: false,
    detached_nail: false,
    nail_stains: false,
    bromhidrosis: false,
    sudoresis: false,
    psoariasis: false,
    dry_feet: false,
    cracky_feet: false,
    wart: false,
    callosity: false,
    callus: false,
    chillblains: false,
  };

  const checkboxes = [
    { nome: "Unha encravada", valueName: "ingrown_nail" },
    { nome: "Micose na unha", valueName: "nail_mycosis" },
    { nome: "Micose plantar (pés)", valueName: "plantar_mycosis" },
    { nome: "Unha descolada", valueName: "detached_nail" },
    { nome: "Manchas na unha", valueName: "nail_stains" },
    { nome: "Bromidrose (chulé)", valueName: "bromhidrosis" },
    { nome: "Sudorese", valueName: "sudoresis" },
    { nome: "Psoríase", valueName: "psoariasis" },
    { nome: "Ressecamento", valueName: "dry_feet" },
    { nome: "Rachadura", valueName: "cracky_feet" },
    { nome: "Verruga", valueName: "wart" },
    { nome: "Calosidade", valueName: "callosity" },
    { nome: "Calo", valueName: "callus" },
    { nome: "Frieiras", valueName: "chillblains" }
];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full'>
        <View className='flex items-center'>
          <Text className='mb-2 w-[90%] text-[20px] font-semibold text-titulo_anamnese'>
            Motivo da visita
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
