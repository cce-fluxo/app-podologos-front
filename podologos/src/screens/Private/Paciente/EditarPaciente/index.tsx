import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { Button } from '../../../../components/Button';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Input from '../../../../components/FormData/InputForm';
import { FormData } from '../../../../components/FormData/Index';
import { useContext, useEffect, useState } from 'react';
import { Toast } from 'toastify-react-native';
import api from '../../../../services/axios';
import AuthContext from '../../../../context/AuthContext';
import Svg, { Path, Rect } from 'react-native-svg';
import ModalAdicionarFoto from '../../../../components/PopUps/ModalAdicionarFoto';
import * as ImagePicker from "expo-image-picker";

export default function EditarPaciente({ route, navigation }) {
  const imageFormData = global.FormData;
  const { user, setUser } = useContext(AuthContext);
  const [userPhoto, setUserPhoto] = useState(route.params.profile_picture ? route.params.profile_picture : null);
  const [modalAdicionarFotoVisivel, setModalAdicionarFotoVisivel] = useState(false);
  const [userData, setUserData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    phone_number: user.phone_number,
    cep: user.cep,
  });
  const [loadingFoto, setLoadingFoto] = useState(true);

  useEffect(() => {
    if (user) {
      setUserData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        phone_number: user.phone_number || '',
        cep: user.cep || '',
      });
    }
  }, [user]);

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

      setLoadingFoto(true);
      if (!result.canceled) {
        //salvamos a imagem aqui
        await salvarImagemPerfil(result.assets[0].uri);
      }

      setLoadingFoto(false);
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
      const response = await api.delete("upload");
      console.log("foto removida com sucesso!");
      salvarImagemPerfil(undefined);
    } catch (error) {
      console.log(error);
      setModalAdicionarFotoVisivel(false);
    }
  };

  //função para salvar imagem de perfil
  const salvarImagemPerfil = async (imagem) => {
    try {
      setModalAdicionarFotoVisivel(false);

      //mandando a imagem para o back
      const formData = new imageFormData();
      formData.append("file", {
        name: "foto-perfil",
        type: "image/jpeg",
        uri: imagem,
      });
      const response = await api.post("/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
        transformRequest: (data: unknown) => data,
      });
      console.log(response.data);
      // atualizar a imagem que será mostrada
      setUserPhoto(imagem);
    } catch (error) {
      throw error;
    }
  };

  // Função para editar o perfil
  async function EditProfile(values: any) {
    try {
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        cep: values.cep,
      };
      console.log('dados enviados para edição:', data);
      const response = await api.patch('/patient/atualizar-perfil', data);
      console.log('Resposta da API:', response.data);
      Toast.success('Sucesso ao editar');
      // Atualiza o contexto com os novos dados do usuário
      setUser((prevUser: any) => ({
        ...prevUser,
        ...data,
      }));
      return response.data;
    } catch (err: any) {
      // Mais detalhes do erro para debug
      console.error('Erro na edição:', err.message);
      console.error('Resposta completa de erro da API:', err.response);
      // Verifique se o erro é relacionado à requisição (e.g., falta de autenticação)
      if (err.response) {
        console.error('Erro no status da requisição:', err.response.status);
        console.error('Dados de erro retornados pela API:', err.response.data);
      } else {
        console.error('Erro inesperado, sem resposta da API:', err);
      }
      Alert.alert('Erro na edição', 'Verifique os campos e tente novamente');
      Toast.error('Erro na edição', '');
    }
  }

  const column = [
    {
      name: 'first_name',
      texto: 'Nome',
      placeholder: user.first_name,
      component: Input,
    },
    {
      name: 'last_name',
      texto: 'Sobrenome',
      placeholder: user.last_name,
      component: Input,
    },

    {
      name: 'phone_number',
      texto: 'Telefone',
      placeholder: user.phone_number,
      component: Input,
    },
    {
      name: 'cep',
      texto: 'CEP',
      placeholder: user.cep,
      component: Input,
    },
    {
      name: 'email',
      texto: 'Email',
      placeholder: user.email,
      component: Input,
      readOnly: true, // Campo somente leitura
    },
  ];

  return (
    <SafeAreaView className='flex w-full flex-1 bg-branco'>
      <ScrollView>
        <View className='flex items-center justify-center pt-5'>
          {loadingFoto 
          ?
            <ActivityIndicator className='m-auto' size={96} color="#2087ED" /> 
          :
          <ImageBackground className='w-24 h-24 flex justify-end items-end rounded-full'
          imageStyle={{ borderRadius: 9999}}
          source={userPhoto ? { uri: userPhoto } : PerfilImage}>
            <TouchableOpacity onPress={() => setModalAdicionarFotoVisivel(true)} className='bg-white rounded-full shadow-md shadow-black p-2'>
              <Svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <Rect width={20} height={20} rx={10} fill="#fff" />
                <Path
                  d="M2.499 17.501h3.125l9.217-9.217-3.125-3.125-9.217 9.217v3.125zm1.667-2.433l7.55-7.55.766.766-7.55 7.55h-.766v-.766zM15.307 2.743a.83.83 0 00-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525a.83.83 0 000-1.175l-1.95-1.95z"
                  fill="#000"
                />
              </Svg>
            </TouchableOpacity>
          </ImageBackground>}
          
          
          <View className='mt-3 flex flex-row items-center justify-center rounded-md bg-zinc-100 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>{route.params.avg}</Text>
          </View>
        </View>
        <Button
          className='mb-4 mt-8 self-center border-[1px] border-azul bg-branco'
          placeholder='Editar ficha de anamnese'
          text='text-azul'
        ></Button>
        <FormData.Root
          // schema={EditPatientSchema}
          initialValues={userData}
          onSubmit={(data) => {
            console.log('Dados recebidos para salvar:', data);
            EditProfile(data);
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: 'self-center mt-2 mb-4 w-[87%]',
              placeholder: 'Salvar',
            }}
            columns={column}
            id='formQuestion'
          ></FormData.Form>
          <Button
            onPress={() => navigation.navigate('PerfilPaciente')}
            className='self-center border-[1px] border-azul bg-branco'
            placeholder='Cancelar'
            text='text-azul'
          ></Button>
        </FormData.Root>
      </ScrollView>

      <ModalAdicionarFoto 
      mensagem='Adicionar foto de perfil'
      modalVisible={modalAdicionarFotoVisivel}
      onFecharModalClick={() => setModalAdicionarFotoVisivel(false)}
      fotoApagavel
      onCameraClick={() => uploadCamera("camera")}
      onGaleriaClick={() => uploadCamera("galeria")}
      />
    </SafeAreaView>
  );
}
