import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { Button } from '../../../../components/Button';
import Header from '../../../../components/Header';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Input from '../../../../components/FormData/InputForm';
import { FormData } from '../../../../components/FormData/Index';
import { useRef, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Toast } from 'toastify-react-native';
import api from '../../../../services/axios';
import { regex } from '../../../../components/ReGex';
import ModalAdicionarFoto from '../../../../components/PopUps/ModalAdicionarFoto';
import * as ImagePicker from "expo-image-picker";
import Svg, { Path, Rect } from 'react-native-svg';

export default function EditarPodologo({route, navigation}) {
  const imageFormData = global.FormData;
  let formikRef = useRef(null);
  const [formacaoValue, setFormacaoValue] = useState(null);
  const [dropdownIsFocus, setDropdownIsFocus] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const tiposFormacao = [
    { label: 'Superior', value: 'Superior' },
    { label: 'Técnico', value: 'Tecnico' },
  ];
  const [userPhoto, setUserPhoto] = useState(route.params.dadosUsuario.profile_picture ? route.params.dadosUsuario.profile_picture : null);
  const [modalAdicionarFotoVisivel, setModalAdicionarFotoVisivel] = useState(false);
  const [loadingFoto, setLoadingFoto] = useState(false);

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

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  async function handleFormSubmit(values) {
    setIsLoading(true);
    try {
      const dadosUsuario = {...values, degree_type: formacaoValue};
      console.log('dados do usuario', dadosUsuario);
      for (let key in dadosUsuario) {
        if (dadosUsuario[key] === null) {
            delete dadosUsuario[key];
        }
      }
      console.log('dados do usuario filtrados', dadosUsuario);
      const response = await api.patch('/doctor/atualizar-perfil', dadosUsuario);
      Toast.success('Sucesso ao editar perfil');
      console.log(response.data);
      navigation.goBack();
    } catch (err: any) {
      Toast.error('Erro ao editar perfil', '');
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
    setIsLoading(false);
  }

  const column = [
    {
      name: 'first_name',
      texto: 'Nome',
      placeholder: route.params.dadosUsuario.first_name,
      component: Input,
    },
    {
      name: 'last_name',
      texto: 'Sobrenome',
      placeholder: route.params.dadosUsuario.last_name,
      component: Input,
    },
    {
      name: 'email',
      texto: 'Email',
      placeholder: route.params.dadosUsuario.email,
      component: Input,
    },
    {
      name: 'phone_number',
      texto: 'Telefone',
      placeholder: route.params.dadosUsuario.phone_number,
      mascara: regex['Telefone'],
      component: Input,
    },
    { name: 'cep', 
      texto: 'CEP', 
      placeholder: route.params.dadosUsuario.cep, 
      mascara: regex['CEP'],
      component: Input,
    },
    {
      name: 'institution',
      texto: 'Instituição',
      placeholder: route.params.dadosUsuario.doctor.institution,
      component: Input,
    },
    {
      name: 'degree_year',
      texto: 'Ano de conclusão',
      placeholder: route.params.dadosUsuario.doctor.degree_year,
      component: Input,
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
            <Text className='font-semibold'>{route.params.dadosUsuario.avg.rating}</Text>
          </View>
        </View>

        <FormData.Root
          innerRef={formikRef}
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          <FormData.Form
            retornavel={false}
            ButtonStyles={{
              className: 'self-center mt-2 mb-10 w-[87%]',
              placeholder: 'Salvar',
            }}
            columns={column}
            id='formQuestion'
          />
          <View className='mb-4 w-[87%] text-gr mx-auto mt-2'>
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
              placeholder={route.params.dadosUsuario.doctor.degree_type}
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
          <Button
            className='mb-2 self-center w-[87%]'
            placeholder='Salvar'
            onPress={handleSubmit}
            loading={loading}
            disabled={loading}
          />
          <Button
            className='mb-4 self-center border-[1px] w-[87%] border-azul bg-branco'
            placeholder='Cancelar'
            text='text-azul'
            onPress={() => navigation.goBack()}
          />
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
