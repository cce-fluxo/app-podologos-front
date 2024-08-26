import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import { Formik } from 'formik';
import { RouteParams } from '../CadastroPodologo';

export default function FormacaoPodologo({ navigation }: any) {
  let formikRef = React.useRef(null);
  const [formacao, setformacao] = React.useState('');

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  function handleFormSubmit(values: RouteParams) {
    navigation.navigate('CadastroPodologo', {
      institution: values.institution,
      degree_year: values.degree_year,
      degree_type: values.degree_type,
    });
  }

  return (
    <SafeAreaView className='flex w-full flex-1 items-center bg-branco'>
      <View className='flex h-full w-full justify-between'>
        <View className='w-full'>
          <Formik
            innerRef={formikRef}
            // validationSchema={LoginSchema}
            initialValues={{
              institution: '',
              degree_year: '',
              degree_type: '',
            }}
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
            }) => (
              <View className='mt-3 flex w-full items-center justify-center space-y-2'>
                {/* Div do email  */}
                <View className='flex w-full'>
                  <Input
                    onChangeText={handleChange('institution')}
                    onBlur={handleBlur('institution')}
                    value={values.institution}
                    placeholder='Instituição'
                    keyboardType='default'
                  />
                  {touched.institution && errors.institution && (
                    <Text className='ml-8 text-red-600'>
                      {errors.institution}
                    </Text>
                  )}
                </View>
                <View className='w-full'>
                  <Input
                    onChangeText={handleChange('degree_year')}
                    onBlur={handleBlur('degree_year')}
                    value={values.degree_year}
                    placeholder='Ano de conclusão'
                    keyboardType='default'
                  />
                  {touched.degree_year && errors.degree_year && (
                    <Text className='ml-8 text-red-600'>
                      {errors.degree_year}
                    </Text>
                  )}
                </View>
                <View className='mb-4 w-full'>
                  <Input
                    onChangeText={handleChange('degree_type')}
                    onBlur={handleBlur('degree_type')}
                    value={values.degree_type}
                    placeholder='Tipo de formação'
                    keyboardType='default'
                  />
                  {touched.degree_type && errors.degree_type && (
                    <Text className='ml-8 text-red-600'>
                      {errors.degree_type}
                    </Text>
                  )}
                </View>
                <View className='w-full items-center'>
                  <Button
                    text='text-azul text-[16px]'
                    className='items-center border-[1px] border-azul bg-white'
                    placeholder='+ Adicionar diploma'
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>

        <Button
          className='mb-10 self-center'
          placeholder='Continuar'
          onPress={handleSubmit}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
