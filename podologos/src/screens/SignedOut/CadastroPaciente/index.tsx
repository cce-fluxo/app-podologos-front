import { SafeAreaView, ScrollView, View } from 'react-native';
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

export default function CadastroPaciente() {
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);
  const { signed, user } = useContext(AuthContext);
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function signUp(data: object) {
    try {
      //Toast.info("Aguarde...", "");
      const response = await api.post('/patient/registrar-paciente', data);
      Toast.success('Sucesso ao cadastrar');
      navigation.navigate("Login")
      return response.data;
    } catch (err: any) {
      Toast.error('Erro no cadastro', '');
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
    }
  }

  // const [data, setData] = useState({
  //   profile_picture: "",
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   phone_number: "",
  //   cep: "",
  //   password: "",
  // });

  const column = [
    {
      name: 'first_name',
      placeholder: 'Nome*',
      component: Input,
    },
    { name: 'last_name', placeholder: 'Sobrenome*', component: Input },
    { name: 'email', placeholder: 'Email*', component: Input },
    { name: 'phone_number', placeholder: 'Telefone*', component: Input },
    { name: 'cep', placeholder: 'CEP*', component: Input },
    { name: 'password', placeholder: 'Senha*', component: Input },
    {
      name: 'confirmarSenha',
      placeholder: 'Confirmar senha*',
      component: Input,
    },
  ];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full'>
        <Button
          className='mb-4 mt-6 w-[87%] self-center border-[1px] border-azul bg-branco'
          text='text-azul'
          placeholder='Adicionar foto de perfil'
          onPress={pickImage}
        >
          <MaterialIcons name='add' size={20} color='#2087ED' />
        </Button>
        <FormData.Root
          schema={CadastroSchema}
          initialValues={{
            profile_picture: '1',
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
    </SafeAreaView>
  );
}
