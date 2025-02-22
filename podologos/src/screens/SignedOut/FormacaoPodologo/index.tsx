import { SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import { Formik } from 'formik';
import { RouteParams } from '../CadastroPodologo';
import { Dropdown } from 'react-native-element-dropdown';

export default function FormacaoPodologo({ route, navigation }: any) {
  let formikRef = React.useRef(null);
  const [formacao, setformacao] = useState('');
  const [formacaoValue, setFormacaoValue] = useState(route.params.infoFormacaoPodologo.degree_type);
  const [dropdownIsFocus, setDropdownIsFocus] = useState(false);


  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  function handleFormSubmit(values: RouteParams) {
    // navigation.navigate('CadastroPodologo', {
    //   institution: values.institution,
    //   degree_year: values.degree_year,
    //   degree_type: values.degree_type,
    // });
    route.params.onGoBack({...values, degree_type: formacaoValue});
    navigation.goBack();
  }

  const tiposFormacao = [
    { label: 'Superior', value: 'Superior' },
    { label: 'Técnico', value: 'Tecnico' },
  ];

  return (
    <SafeAreaView className='flex w-full flex-1 items-center bg-branco'>
      <View className='flex h-full w-full justify-between'>
        <View className='w-full'>
          <Formik
            innerRef={formikRef}
            // validationSchema={LoginSchema}
            initialValues={route.params.infoFormacaoPodologo}
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
                <View className='mb-2 w-full'>
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
                {/* <View className='mb-2 w-full'>
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
                </View> */}
                <View className='mb-4 w-[90%] text-gr'>
                  <Dropdown
                    style={{
                      backgroundColor: '#c3c5c733',
                      padding: 16,
                      height: 56,
                      borderRadius: 12,
                    }}
                    placeholderStyle={{
                      color: "#4b5563dc",
                      fontSize: 14,
                    }}
                    selectedTextStyle={{color: "#000000", fontSize: 14}}
                    data={tiposFormacao}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!dropdownIsFocus ? 'Tipo de formação' : '...'}
                    searchPlaceholder="Search..."
                    value={formacaoValue}
                    onFocus={() => setDropdownIsFocus(true)}
                    onBlur={() => setDropdownIsFocus(false)}
                    onChange={item => {
                      setFormacaoValue(item.value);
                      setDropdownIsFocus(false);
                    }}
                  />
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
