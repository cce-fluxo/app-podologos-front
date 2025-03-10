import { Alert, SafeAreaView, Text, View } from 'react-native';
import Header from '../../../../components/Header';
import { Button } from '../../../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Input from '../../../../components/Inputs';
import { useRef, useState } from 'react';
import api from '../../../../services/axios';
import { Formik } from 'formik';
import ButtonEnviarFoto from '../../../../components/ButtonEnviarFoto';
import * as ImagePicker from "expo-image-picker";
import ModalAdicionarFoto from '../../../../components/PopUps/ModalAdicionarFoto';
import ModalOk from '../../../../components/PopUps/ModalOk';

export default function NovaConsulta({ navigation }) {
  const requestFormData = global.FormData;
  let formikRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fotoDoPe, setFotoDoPe] = useState();
  const [modalAdicionarFotoVisivel, setModalAdicionarFotoVisivel] = useState(false);
  const [modalSolicitacaoComSucesso, setModalSolicitacaoComSucesso] = useState(false);
  
  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const fecharModalSolicitacaoComSucesso = async () => {
    await removerImagem();
    formikRef.current?.resetForm();
    setModalSolicitacaoComSucesso(false);
  }

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
    if (!fotoDoPe) {
      Alert.alert(
        'Erro',
        'Envie alguma foto.'
      );
      setIsLoading(false);
      return;
    }
    try {
      //mandando a imagem para o back
      const formData = new requestFormData();
      formData.append("file", {
        name: "foto-perfil",
        type: "image/jpeg",
        uri: fotoDoPe,
      });

      // formatando conteúdo do json no formData
      formData.append('obs', observacao.obs);

      const response = await api.post(`/appointment/registrar-consulta`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setModalSolicitacaoComSucesso(true);
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
        setFotoDoPe(result.assets[0].uri);
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
      setFotoDoPe(undefined);
    } catch (error) {
      console.log(error);
      setModalAdicionarFotoVisivel(false);
    }
  };

  return (
    <SafeAreaView className='flex h-full w-full bg-branco'>
      <View className='flex h-full justify-between px-5'>
        <View className='flex space-y-4'>
          <ButtonEnviarFoto texto='Adicionar foto do pé' foto={fotoDoPe} onPressComFoto={removerImagem} onPress={() => setModalAdicionarFotoVisivel(true)} />

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

      <ModalAdicionarFoto 
      mensagem='Adicionar foto de perfil'
      modalVisible={modalAdicionarFotoVisivel}
      onFecharModalClick={() => setModalAdicionarFotoVisivel(false)}
      fotoApagavel={false}
      onCameraClick={() => uploadCamera("camera")}
      onGaleriaClick={() => uploadCamera("galeria")}
      onRemoverFotoClick={() => removerImagem()}
      />
      <ModalOk 
      modalVisible={modalSolicitacaoComSucesso}
      mensagem='Solicitação de consulta enviada com sucesso!'
      onOkClick={() => fecharModalSolicitacaoComSucesso()}
      />
    </SafeAreaView>
  );
}
