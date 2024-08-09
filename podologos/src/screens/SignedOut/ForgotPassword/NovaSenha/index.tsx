import { SafeAreaView, Text, View } from 'react-native';
import Input from '../../../../components/Inputs';
import { Button } from '../../../../components/Button';
import { Formik } from 'formik';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NovaSenhaSchema } from '../../../../components/Schemas';
import ModalOk from '../../../../components/ModalOk';
import { api } from '../../../../services/api';

function NovaSenha() {
  const [modalVisible, setModalVisible] = React.useState(false);
  function closeModal() {
    setModalVisible(false);
    navigation.navigate('Login');
  }
  function openModal() {
    setModalVisible(true);
  }

  const navigation = useNavigation();
  const route = useRoute();
  const { email }: any = route.params;

  let formikRef = React.useRef(null);

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  async function handleFormSubmit({ values }: any) {
    try {
      const data = {
        password: values.password,
        email: email,
      };
      const response = await api.patch(
        '/auth/forgot-password/change-password',
        data
      );
      openModal();
      return response.data;
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }

  function handleForm({ values }: any) {
    console.log(values.password);
    openModal();
  }
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='w-full flex-1 items-center justify-center'>
        <Text className='mb-6 flex text-[20px] font-bold text-[#4F5450]'>
          Redefina sua senha
        </Text>

        <Formik
          validationSchema={NovaSenhaSchema}
          innerRef={formikRef}
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => {
            const submissionValues = {
              password: values.password,
              email: email,
            };
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
            <View className='flex w-full items-center justify-between space-y-4'>
              {/* Div da NovaSenha */}
              <View className='flex w-full'>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Nova senha*'
                  keyboardType='default'
                />
                {touched.password && errors.password && (
                  <Text className='ml-6 text-red-600'>
                    {String(errors.password)}
                  </Text>
                )}
              </View>
              <View className='flex w-full'>
                <Input
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder='Confirmar nova senha*'
                  keyboardType='default'
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text className='ml-6 text-red-600'>
                    {String(errors.confirmPassword)}
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
          placeholder='Redefinir senha'
        />
      </View>
      <ModalOk
        modalVisible={modalVisible}
        mensagem='Senha redefinida com sucesso!'
        onOkClick={closeModal}
      ></ModalOk>
    </SafeAreaView>
  );
}

export default NovaSenha;
