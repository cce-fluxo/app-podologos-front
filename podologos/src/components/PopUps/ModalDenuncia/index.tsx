import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../Inputs';
import { Button } from '../../Button';
import { Formik } from 'formik';
import api from '../../../services/axios';

interface PopupProps {
  modalVisible: boolean;
  userId?: string;
  onSucesso?: () => void;
  onNoClick: () => void;
}

function ModalDenuncia({ modalVisible, userId, onSucesso, onNoClick }: PopupProps) {
  let formikRef = React.useRef(null);
  const [isLoadingDenuncia, setIsLoadingDenuncia] = useState(false);

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  async function handleFormSubmit(values) {
    setIsLoadingDenuncia(true);
    try {
      const response = await api.post(`/report/create/${userId}`, {reason: values.reason});
      console.log(response.data);
      onNoClick();
      onSucesso();
    } catch (error) {
      console.error('Erro ao realizar review:', error);
    }
    setIsLoadingDenuncia(false);
  }

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black-transparent'>
        <View className='w-[80vw] items-center justify-center space-y-2 rounded-2xl bg-white p-1 shadow-md shadow-black'>
          <Formik
            innerRef={formikRef}
            // validationSchema={LoginSchema}
            initialValues={{reason: ''}}
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
              <Input 
              placeholder='Descreva sua denúncia'
              onChangeText={handleChange('reason')}
              onBlur={handleBlur('reason')}
              value={values.reason}
              />
            )}
          </Formik>

          <View className='flex w-full items-center justify-center space-y-2 py-2'>
            <Button
              text='text-branco text-[16px]'
              placeholder='Confirmar denúncia'
              onPress={handleSubmit}
              loading={isLoadingDenuncia}
              disabled={isLoadingDenuncia}
            />
            <Button
              text='text-azul text-[16px]'
              placeholder='Voltar'
              className='border-[1px] border-azul bg-white'
              onPress={onNoClick}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalDenuncia;
