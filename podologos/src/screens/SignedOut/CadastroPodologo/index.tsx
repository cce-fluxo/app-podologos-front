import { Alert, Text } from 'react-native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { FormData } from '../../../components/FormData/Index';
import React, { useState } from 'react';
import Input from '../../../components/FormData/InputForm';
import { Button } from '../../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { CadastroSchema } from '../../../components/Schemas';
import TermosCondicoes from '../../../components/TermosCondicoes';
import api from '../../../services/axios';
import { Toast } from 'toastify-react-native';
import { useRoute } from '@react-navigation/native';
import { regex } from '../../../components/ReGex';
import { Formik } from 'formik';
import ModalOk from '../../../components/PopUps/ModalOk';
import * as ImagePicker from 'expo-image-picker';
import ModalAdicionarFoto from '../../../components/PopUps/ModalAdicionarFoto';
import ButtonEnviarFoto from '../../../components/ButtonEnviarFoto';

export type RouteParams = {
  institution?: string;
  degree_type?: string;
  degree_year?: string;
};

export default function CadastroPodologo({ navigation }: any) {
  const requestFormData = global.FormData;
  const [modalAdicionarFotoVisivel, setModalAdicionarFotoVisivel] = useState(false);
  const [fotoUsuario, setFotoUsuario] = useState();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [visibilidadeCadastroComSucessoPopup, setVisibilidadeCadastroComSucessoPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [infoFormacao, setInfoFormacao] = useState({
    institution: '',
    degree_year: '',
    degree_type: '',
    degree_photo: ''
  });

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    cep: '',
    password: '',
    confirmarSenha: '',
  };

  const navigateToFormacao = () => {
    navigation.navigate('FormacaoPodologo', {
      onGoBack: (data) => {
        // Callback function to handle data from ScreenB
        setInfoFormacao(data);
        console.log(data);
      },
      infoFormacaoPodologo: infoFormacao,
    });
  };

  async function signUp(data: object) {
    setIsLoadingLogin(true);
    if (!fotoUsuario) {
      Alert.alert(
        'Erro',
        'Envie alguma foto de usuário.'
      );
      setIsLoadingLogin(false);
      return;
    }

    if (!infoFormacao.degree_photo) {
      Alert.alert(
        'Erro',
        'Envie alguma foto de diploma.'
      );
      setIsLoadingLogin(false);
      return;
    }

    try {

      //formatando a imagem para o back
      const formData = new requestFormData();
      formData.append("images", {
        name: "fotoPerfil",
        type: "image/jpeg",
        uri: fotoUsuario,
      });
      formData.append("images", {
        name: "fotoDiploma",
        type: "image/jpeg",
        uri: infoFormacao.degree_photo,
      });

      // adicionando todos os valores do formik no formData
      Object.keys(data).forEach((key) => {
        const value = data[key];
        // adicionando no form data
        formData.append(key, String(value));
      });

      const {degree_photo, ...restoInfoFormacao} = infoFormacao;
      console.log(restoInfoFormacao);
      // adicionando todos os valores de infoFormacao do formik no formData
      Object.keys(restoInfoFormacao).forEach((key) => {
        const value = restoInfoFormacao[key];
        // adicionando no form data
        formData.append(key, String(value));
      });

      // const infoPod = {...data, ...infoFormacao};
      // console.log(infoPod);
      const response = await api.post('/doctor/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.success('Sucesso ao cadastrar');
      console.log(response.data);
      setVisibilidadeCadastroComSucessoPopup(true);
    } catch (err: any) {
      Toast.error('Erro no cadastro', '');
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
    setIsLoadingLogin(false);
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
        setFotoUsuario(result.assets[0].uri);
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
      setFotoUsuario(undefined);
    } catch (error) {
      console.log(error);
      setModalAdicionarFotoVisivel(false);
    }
  };

  const inputsCadastro = [
    {
      name: 'first_name',
      placeholder: 'Nome*',
      component: Input,
    },
    { name: 'last_name', placeholder: 'Sobrenome*', component: Input },
    { name: 'email', placeholder: 'Email*', component: Input },
    { name: 'phone_number', placeholder: 'Telefone*', mascara: regex['Telefone'], component: Input },
    { name: 'cep', placeholder: 'CEP*', mascara: regex['CEP'], component: Input },
    { name: 'password', placeholder: 'Senha*', secureTextEntry: true, component: Input },
    {
      name: 'confirmarSenha',
      placeholder: 'Confirmar senha*',
      secureTextEntry: true,
      component: Input,
    },
  ];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ModalOk 
      modalVisible={visibilidadeCadastroComSucessoPopup} 
      mensagem='Seu cadastro está em análise, aguarde a confirmação para acessar sua conta' 
      onOkClick={() => navigation.goBack()} 
      />
      <ScrollView className='mb-4 w-full'>
        <Button
          onPress={navigateToFormacao}
          className='mb-2 mt-2 w-[87%] self-center border-[1px] border-azul bg-branco'
          placeholder='Formação'
          text='text-azul'
        />
        <FormData.Root
          schema={CadastroSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            if (!isChecked) {
              Alert.alert(
                'Erro',
                'Você deve aceitar os Termos e Condições para continuar.'
              );
              return;
            }
            const { confirmarSenha, ...filteredData } = values;
            console.log(filteredData);
            signUp(filteredData);
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: 'self-center mt-6 mb-10 w-[87%]',
              placeholder: 'Criar conta',
              disabled: isLoadingLogin,
              loading: isLoadingLogin,
            }}
            columns={inputsCadastro}
            id='formQuestion'
          >
            <View className='flex w-[87%] items-center self-center mb-4 mt-4'>
              <ButtonEnviarFoto 
                texto='Adicionar foto de perfil' 
                foto={fotoUsuario} 
                onPressComFoto={removerImagem} 
                onPress={() => setModalAdicionarFotoVisivel(true)}
              />
            </View>
            
            <View className='flex w-[90%] flex-row items-center self-center'>
              <Checkbox
                className='ml-4'
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? '#00C86F' : undefined}
              ></Checkbox>
              <TermosCondicoes />
            </View>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
      <ModalAdicionarFoto
        mensagem='Adicionar foto de perfil'
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
