import { SafeAreaView, Text, View } from 'react-native';
import Input from '../../../../components/Inputs';
import { Button } from '../../../../components/Button';
import { Formik } from 'formik';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../../../services/api';
import { Toast } from 'toastify-react-native';

function Codigo({ navigation }) {
  const route = useRoute();
  const { email }: any = route.params;

  let formikRef = React.useRef(null);
  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const onSubmitCode = async (data: any) => {
    try {
      /* console.log(Object.values(data).join("")); */
      const info = {
        token: Object.values(data).join(''),
      };
      const response = await api.patch('/auth/reset-password', info);
    } catch (error) {
      console.log(error);
      Toast.error('Código inválido', '');
    }
  };
  const handleFormSubmit = (values) => {
    console.log('Email:', email);
    console.log('Código:', values.codigo);
    navigation.navigate('NovaSenha', { email: email });
  };
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='w-full flex-1 items-center justify-center'>
        <Text className='mb-4 flex text-[20px] font-bold text-[#4F5450]'>
          Verifique seu e-mail
        </Text>
        <View className='ml-4 w-full items-start'>
          <Text className='m-4 text-[14px]'>
            Digite o código enviado para o e-mail
          </Text>
        </View>
        <Formik
          innerRef={formikRef}
          initialValues={{
            codigo: '',
          }}
          onSubmit={(values) => {
            const submissionValues = { email: email, codigo: values.codigo };
            handleFormSubmit(submissionValues);
            console.log(submissionValues);
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
              {/* Div do codigo  */}
              <View className='flex w-full'>
                <Input
                  onChangeText={handleChange('codigo')}
                  onBlur={handleBlur('codigo')}
                  value={values.codigo}
                  placeholder='Código*'
                  keyboardType='default'
                />
                {touched.codigo && errors.codigo && (
                  <Text className='ml-6 text-red-600'>
                    {String(errors.codigo)}
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

export default Codigo;
