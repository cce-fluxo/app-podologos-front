import { Alert, SafeAreaView, ScrollView, View } from 'react-native';
import { FormData } from '../../../components/FormData/Index';
import { useState, useContext } from 'react';
import Input from '../../../components/FormData/InputForm';
import { Button } from '../../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { CadastroSchema } from '../../../components/Schemas';
import TermosCondicoes from '../../../components/TermosCondicoes';
import * as ImagePicker from 'expo-image-picker';
import ToastManager, { Toast } from 'toastify-react-native';
import AuthContext from '../../../context/AuthContext';
import api from '../../../services/axios';
import { useNavigation } from '@react-navigation/native';
import { regex } from '../../../components/ReGex';
import ModalAdicionarFoto from '../../../components/PopUps/ModalAdicionarFoto';
import ButtonEnviarFoto from '../../../components/ButtonEnviarFoto';

export default function CadastroPaciente() {
  const requestFormData = global.FormData;
  const [modalAdicionarFotoVisivel, setModalAdicionarFotoVisivel] = useState(false);
  const [fotoUsuario, setFotoUsuario] = useState();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);
  const { signed, user, signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const column = [
    {
      name: 'first_name',
      placeholder: 'Nome*',
      component: Input,
    },
    { name: 'last_name', placeholder: 'Sobrenome*', component: Input },
    { name: 'email', placeholder: 'Email*', component: Input },
    {
      name: 'phone_number',
      placeholder: 'Telefone*',
      mascara: regex['Telefone'],
      component: Input,
    },
    {
      name: 'cep',
      placeholder: 'CEP*',
      mascara: regex['CEP'],
      component: Input,
    },
    { name: 'password', placeholder: 'Senha*', secureTextEntry: true, component: Input },
    {
      name: 'confirmarSenha',
      placeholder: 'Confirmar senha*', 
      secureTextEntry: true,
      component: Input,
    },
  ];

  async function signUp(data: any) {
    setIsLoadingLogin(true);

    if (!fotoUsuario) {
      Alert.alert(
        'Erro',
        'Envie alguma foto.'
      );
      setIsLoadingLogin(false);
      return;
    }

    try {

      //mandando a imagem para o back
      const formData = new requestFormData();
      formData.append("file", {
        name: "foto-perfil",
        type: "image/jpeg",
        uri: fotoUsuario,
      });

      // adicionando todos os valores do formik no formData
      Object.keys(data).forEach((key) => {
        const value = data[key];

        // adicionando no form data
        formData.append(key, String(value));
        
      });

      const response = await api.post('/patient/registrar-paciente', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.success('Sucesso ao cadastrar', '');
      const userCredentials = {
        email: data.email,
        password: data.password,
      };
      await signIn(userCredentials);
      console.log('Após chamada de signIn');

      return response.data;
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

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full'>
        <View className='flex w-[87%] items-center self-center mb-4'>
          <ButtonEnviarFoto 
          texto='Adicionar foto de perfil' 
          foto={fotoUsuario} 
          onPressComFoto={removerImagem} 
          onPress={() => setModalAdicionarFotoVisivel(true)} />
        </View>
        <FormData.Root
          schema={CadastroSchema}
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            cep: '',
            password: '',
            confirmarSenha: '',
          }}
          onSubmit={(data) => {
            {
              if (!isChecked) {
                Alert.alert(
                  'Erro',
                  'Você deve aceitar os Termos e Condições para continuar.'
                );
                return;
              }
              const { confirmarSenha, ...filteredData } = data;
              signUp(filteredData);
              console.log(filteredData);
            }
          }}
        >
          <FormData.Form
            retornavel={true}
            ButtonStyles={{
              className: 'self-center mt-2 mb-10 w-[87%]',
              placeholder: 'Criar conta',
              disabled: isLoadingLogin,
              loading: isLoadingLogin,
            }}
            columns={column}
            id='formQuestion'
          >
            <View className='mb-4 mt-4 flex w-[90%] flex-row items-center self-center'>
              <Checkbox
                className='ml-4'
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? '#00C86F' : undefined}
              />
              <TermosCondicoes />
            </View>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
      <ToastManager position='center' />
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
