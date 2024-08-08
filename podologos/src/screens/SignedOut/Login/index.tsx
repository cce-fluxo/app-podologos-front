import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import { StatusBar } from 'expo-status-bar';
import AuthContext from '../../../context/AuthContext';
import ToastManager from 'toastify-react-native';
import { Formik } from 'formik';
import { LoginSchema } from '../../../components/Schemas';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const { signed, signIn, user } = useContext(AuthContext);

  // console.log(signed);
  // console.log(user);

  async function handleSignIn(values: any) {
    const userCredentials = {
      email: values.email,
      password: values.password,
    };
    console.log('Logar');
    await signIn(userCredentials); // Adicionado await para garantir sincronização
  }

  const columns = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      component: Input,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      component: Input,
    },
  ];

  return (
    <View className='flex-1 items-center justify-center gap-4 bg-white'>
      <View className='w-full'>
        <Formik
          // validationSchema={LoginSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            handleSignIn(values);
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
              <View className='w-full'>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='Email*'
                  keyboardType='default'
                />
                {touched.email && errors.email && (
                  <Text className='ml-8 text-red-600'>{errors.email}</Text>
                )}
              </View>
              <View className='w-full'>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Senha*'
                  keyboardType='default'
                />
                {touched.password && errors.password && (
                  <Text className='ml-8 text-red-600'>{errors.password}</Text>
                )}
              </View>
              <View className='w-full items-center space-y-2'>
                <TouchableOpacity onPress={() => navigation.navigate('Email')}>
                  <Text className='text-azul'>Esqueci minha senha</Text>
                </TouchableOpacity>
                <Button
                  text='text-branco text-[16px]'
                  className='items-center'
                  placeholder='Entrar'
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <Button
        className='border-2 border-azul bg-white'
        text='text-azul text-[16px]'
        placeholder='Nova conta'
        onPress={() => navigation.navigate('PreLogin')}
      ></Button>
      <StatusBar style='auto' />
      <ToastManager />
    </View>
  );
}

export default Login;
