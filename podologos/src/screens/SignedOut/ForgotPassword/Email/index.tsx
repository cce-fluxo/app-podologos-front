import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../../components/Inputs';
import { Button } from '../../../../components/Button';
import PageTitle from '../../../../components/Header';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { EmailSchema } from '../../../../components/Schemas';
import { api } from '../../../../services/api';

function Email({ navigation }) {
  let formikRef = React.useRef(null);
  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const [email, setEmail] = React.useState('');

  async function handleEmailSubmit(values: any) {
    try {
      const response = await api.patch('/auth/forgot-password', values);
      setEmail(values.email);
      navigation.navigate('Codigo', { email: values.email });
      return response.data;
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }
  function handleFormSubmit(values: any) {
    navigation.navigate('Codigo', { email: values.email });
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='w-full flex-1 items-center justify-center'>
        <Text className='mb-4 flex text-[20px] font-bold text-[#4F5450]'>
          Insira seu e-mail
        </Text>
        <View className='ml-4 w-full'>
          <Text className='m-4 text-[14px]'>
            Informe o email cadastrado e um email com as instruções de
            recuperação será enviado.
          </Text>
        </View>
        <Formik
          validationSchema={EmailSchema}
          innerRef={formikRef}
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => {
            handleEmailSubmit(values);
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
            <View className='flex w-full items-center justify-between space-y-6'>
              {/* Div do email  */}
              <View className='flex w-full'>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='Email*'
                  keyboardType='default'
                />
                {touched.email && errors.email && (
                  <Text className='ml-6 text-red-600'>
                    {String(errors.email)}
                  </Text>
                )}
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View className='mb-10 w-full items-center justify-center'>
        <Button
          onPress={handleSubmit}
          text='text-white text-[16px]'
          className='items-center'
          placeholder='Enviar'
        />
      </View>
    </SafeAreaView>
  );
}

export default Email;
