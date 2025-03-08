import { Alert, SafeAreaView, Text, View } from 'react-native';
import Header from '../../../../components/Header';
import { Button } from '../../../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Input from '../../../../components/Inputs';
import { useRef, useState } from 'react';
import api from '../../../../services/axios';
import { Formik } from 'formik';

export default function NovaConsulta({ navigation }) {
  let formikRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const solicitarNovaConsulta = async (observacao) => {
    setIsLoading(true);
    if (observacao.obs === '') {
      Alert.alert(
        'Erro',
        'Escreva alguma observação.'
      );
      setIsLoading(false);
      return;
    }
    try {
      const response = await api.post(`/appointment/registrar-consulta`, { picture: "1", obs: observacao.obs });
      console.log(response.data);
      console.log(response);
    } catch (error) {
      console.error('Erro ao realizar solicitar consulta:', error);
      console.log(error.response.data.message)
      Alert.alert(
        'Erro',
        error.response.data.message
      );
    }
    setIsLoading(false);
  }

  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <View className='flex h-full justify-between px-5'>
        <View className='flex space-y-4'>
          <Button
            className='mt-8 w-full self-center border-[1px] border-azul bg-branco'
            text='text-azul'
            placeholder='Adicionar foto do pé'
          >
            <MaterialIcons name='add' size={20} color='#2087ED' />
          </Button>
          <Text className='text-[23px] font-semibold text-[#46555A]'>
            Observações
          </Text>

          <View className='w-full'>
            <Formik
              innerRef={formikRef}
              // validationSchema={LoginSchema}
              initialValues={{obs: ''}}
              onSubmit={(values) => {
                solicitarNovaConsulta(values);
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
                <View className='flex w-full items-center justify-center space-y-2'>
                  <Input
                  onChangeText={handleChange('obs')}
                  onBlur={handleBlur('obs')}
                  value={values.obs}
                  className='w-full' 
                  placeholder='Observação para a consulta.' />
                </View>
              )}
            </Formik>
          </View>

          
          <Text className='text-[23px] font-semibold text-[#46555A]'>
            Formulário médico
          </Text>
          <Button
            className='w-full self-center border-[1px] border-azul bg-branco'
            text='text-azul'
            placeholder='Editar ficha de anamnese'
            onPress={() => navigation.navigate('Anamnese')}
          />
        </View>

        <Button className='mb-8 w-full' placeholder='Enviar' onPress={handleSubmit} loading={isLoading} disabled={isLoading} />
      </View>
    </SafeAreaView>
  );
}
