import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import { StatusBar } from 'expo-status-bar';
import AuthContext from '../../../context/AuthContext';
import ToastManager from 'toastify-react-native';
import { Formik } from 'formik';
import { LoginSchema } from '../../../components/Schemas';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function Login() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { signed, signIn } = useContext(AuthContext);

  useEffect(() => {
    console.log('Estado signed mudou (Login):', signed);
  }, [signed]);

  async function handleSignIn(values: any) {
    const userCredentials = {
      email: values.email,
      password: values.password,
    };
    await signIn(userCredentials);
    console.log('Após chamada de signIn');
  }

  return (
    <View className='flex-1 items-center justify-center gap-4 bg-white'>
      <View className='w-full'>
        <Formik
          validationSchema={LoginSchema}
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
              <View className='flex w-full'>
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
                <View></View>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Senha*'
                  secureTextEntry={!isPasswordVisible}
                  keyboardType='default'
                  rightIcon={
                    <TouchableOpacity
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      <Ionicons
                        name={isPasswordVisible ? 'eye-off' : 'eye'}
                        size={24}
                        color='grey'
                      />
                    </TouchableOpacity>
                  }
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
