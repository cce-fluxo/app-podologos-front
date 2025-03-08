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

export default function Avaliacao({ route, navigation }) {
  let formikRef = useRef(null);
  const [dropdownIsFocus, setDropdownIsFocus] = useState(false);

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  function handleFormSubmit(values) {
    const infoAvaliacao = values;
    navigation.navigate('MotivoVisita', { infoDadosPessoais: route.params.infoDadosPessoais, infoAvaliacao });
  }

  const valoresDropdown = [
    { label: 'Aberto', value: 'Aberto' },
    { label: 'Fechado', value: 'Fechado' },
  ];

  const initialValues = {
    physical_activity: false,
    physical_activity_type: "",
    footwear: "",
    allergies: false,
    allergy_type: "",
    family_diabetes: false,
    family_diabetes_member: "",
    hypertension: false,
    diabetes: false,
    pregnant_or_breastfeeding: false,
  };

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full'>
        <View className='flex items-center'>
          <Text className='mb-2 w-[90%] text-[20px] font-semibold text-titulo_anamnese'>
            Avaliação
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
                  <InputCheckbox 
                    texto='Atividade Física' 
                    value={values.physical_activity} 
                    onValueChange={(value) => setFieldValue('physical_activity', value)} 
                  />

                  <View className='flex w-full'>
                    <Input
                      onChangeText={handleChange('physical_activity')}
                      onBlur={handleBlur('physical_activity')}
                      value={values.physical_activity}
                      placeholder='Qual?'
                      keyboardType='default'
                    />
                    {touched.physical_activity && errors.physical_activity && (
                      <Text className='ml-8 text-[#FF0033]'>
                        {errors.physical_activity}
                      </Text>
                    )}
                  </View>

                  <View className='w-[90%] my-4 text-gr'>
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
                      itemContainerStyle={{backgroundColor: "#c3c5c733"}}
                      containerStyle={{borderRadius: 16}}
                      data={valoresDropdown}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!dropdownIsFocus ? 'Tipo de calçado mais usado' : '...'}
                      searchPlaceholder="Search..."
                      value={values.footwear}
                      onFocus={() => setDropdownIsFocus(true)}
                      onBlur={() => setDropdownIsFocus(false)}
                      onChange={item => {
                        setFieldValue('footwear', item.value);
                        setDropdownIsFocus(false);
                      }}
                    />
                  </View>

                  <InputCheckbox 
                    texto='Alérgico' 
                    value={values.allergies} 
                    onValueChange={(value) => setFieldValue('allergies', value)} 
                  />

                  <View className='flex w-full'>
                    <Input
                      onChangeText={handleChange('allergy_type')}
                      onBlur={handleBlur('allergy_type')}
                      value={values.allergy_type}
                      placeholder='Qual?'
                      keyboardType='default'
                    />
                    {touched.allergy_type && errors.allergy_type && (
                      <Text className='ml-8 text-[#FF0033]'>
                        {errors.allergy_type}
                      </Text>
                    )}
                  </View>

                  <InputCheckbox 
                    texto='Familiares Diabético' 
                    value={values.family_diabetes} 
                    onValueChange={(value) => setFieldValue('family_diabetes', value)} 
                  />

                  <View className='flex w-full'>
                    <Input
                      onChangeText={handleChange('family_diabetes_member')}
                      onBlur={handleBlur('family_diabetes_member')}
                      value={values.family_diabetes_member}
                      placeholder='Grau de parentesco?'
                      keyboardType='default'
                    />
                    {touched.family_diabetes_member && errors.family_diabetes_member && (
                      <Text className='ml-8 text-[#FF0033]'>
                        {errors.family_diabetes_member}
                      </Text>
                    )}
                  </View>

                  <InputCheckbox 
                    texto='Hipertenso' 
                    value={values.hypertension} 
                    onValueChange={(value) => setFieldValue('hypertension', value)} 
                  />
                  <InputCheckbox 
                    texto='Diabético' 
                    value={values.diabetes} 
                    onValueChange={(value) => setFieldValue('diabetes', value)} 
                  />
                  <InputCheckbox 
                    texto='Grávida ou Lactante (Amamentando)' 
                    value={values.pregnant_or_breastfeeding} 
                    onValueChange={(value) => setFieldValue('pregnant_or_breastfeeding', value)} 
                  />
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
