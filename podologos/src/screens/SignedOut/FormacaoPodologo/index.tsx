import { Alert, SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import { Formik } from 'formik';
import { RouteParams } from '../CadastroPodologo';
import { Dropdown } from 'react-native-element-dropdown';
import * as ImagePicker from 'expo-image-picker';
import ModalAdicionarFoto from '../../../components/PopUps/ModalAdicionarFoto';
import ButtonEnviarFoto from '../../../components/ButtonEnviarFoto';

export default function FormacaoPodologo({ route, navigation }: any) {
  let formikRef = React.useRef(null);
  const [modalAdicionarFotoVisivel, setModalAdicionarFotoVisivel] = useState(false);
  const [fotoDiploma, setFotoDiploma] = useState(route.params.infoFormacaoPodologo.degree_photo);
  const [formacaoValue, setFormacaoValue] = useState(route.params.infoFormacaoPodologo.degree_type);
  const [dropdownIsFocus, setDropdownIsFocus] = useState(false);

  const tiposFormacao = [
    { label: 'Superior', value: 'Superior' },
    { label: 'Técnico', value: 'Tecnico' },
  ];

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
    if (!fotoDiploma) {
      Alert.alert(
        'Erro',
        'Você precisa enviar uma foto do diploma.'
      );
      return;
    }
    route.params.onGoBack({...values, degree_type: formacaoValue, degree_photo: fotoDiploma});
    navigation.goBack();
  }

  //função de upload pela câmera
  const uploadCamera = async (modo) => {
    try {
      let result = {};
      if (modo === "galeria") {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        //salvamos a imagem aqui
        setFotoDiploma(result.assets[0].uri);
      }
      setModalAdicionarFotoVisivel(false);

      console.log("IMAGEM TIRADA COM SUCESSO E SALVA");
      console.log(result);
    } catch (error) {
      console.log(error);
      setModalAdicionarFotoVisivel(false);
    }
  };

  //função para remover a foto do perfil
  const removerImagem = async () => {
    try {
      setFotoDiploma(undefined);
    } catch (error) {
      console.log(error);
      setModalAdicionarFotoVisivel(false);
    }
  };

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
                    <Text className='ml-8 text-[#FF0033]'>
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
                    <Text className='ml-8 text-[#FF0033]'>
                      {errors.degree_year}
                    </Text>
                  )}
                </View>
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
                    itemContainerStyle={{backgroundColor: "#c3c5c733"}}
                    containerStyle={{borderRadius: 16}}
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
                <View className='items-center w-[90%]'>
                  <ButtonEnviarFoto 
                    texto='Adicionar diploma' 
                    foto={fotoDiploma} 
                    onPressComFoto={removerImagem} 
                    onPress={() => setModalAdicionarFotoVisivel(true)}
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
        />
      </View>
      <ModalAdicionarFoto
        mensagem='Adicionar foto do diploma'
        modalVisible={modalAdicionarFotoVisivel}
        onFecharModalClick={() => setModalAdicionarFotoVisivel(false)}
        fotoApagavel={false}
        onCameraClick={() => uploadCamera("camera")}
        onGaleriaClick={() => uploadCamera("galeria")}
        onRemoverFotoClick={() => removerImagem()}
      />
    </SafeAreaView>
  );
}
