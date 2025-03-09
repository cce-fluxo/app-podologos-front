import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PerfilImage from '../../../../assets/PerfilImage.png';
import Header from '../../../../components/Header';
import ProfileInfo from '../../../../components/ProfileInfo';
import { Button } from '../../../../components/Button';
import Avaliacao from '../../../../components/Avaliacao';
import Input from '../../../../components/Inputs';
import api from '../../../../services/axios';
import ModalOk from '../../../../components/PopUps/ModalOk';
import { Formik } from 'formik';

export default function PerfilDoPodologo({route, navigation}) {
  let formikRef = React.useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingReview, setIsLoadingReview] = useState(false);
  const [visibilidadeAvaliacaoCriada, setVisibilidadeAvaliacaoCriada] = useState(false);
  const [visibilidadeErroAoCriarAvaliacao, setVisibilidadeErroAoCriarAvaliacao] = useState(false);
  const [dadosPodologo, setDadosPodologo] = useState({});
  const [requestError, setRequestError] = useState();

  const [notas, setNotas] = useState([
    'star-outlined',
    'star-outlined',
    'star-outlined',
    'star-outlined',
    'star-outlined',
  ]);

  function novaNota(valor: number) {
    const novasNotas = notas.map((nota, index) => {
      if (index < valor) {
        return 'star';
      } else {
        return 'star-outlined';
      }
    });

    setNotas(novasNotas);
  }

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  async function contarRating() {
    let rating = 0;
    // for (const star in notas) {
    //   console.log(star);
    //   if (star === "star") {
    //     rating += 1;
    //   }
    // }
    notas.forEach((element) => {
      console.log(element);
      if (element === "star") {
        rating += 1;
      }
    });
    return rating;
  }

  async function handleFormSubmit(values) {
      setIsLoadingReview(true);
      const rating = await contarRating();
      try {
        console.log('rating', rating);
        const response = await api.post(`/review/create/${dadosPodologo.user_id}`, {comment: values.comment, rating: rating});
        console.log(response.data);
        console.log(response);
        setVisibilidadeAvaliacaoCriada(true);
      } catch (error) {
        console.error('Erro ao realizar review:', error);
        setVisibilidadeErroAoCriarAvaliacao(true);
      }
      setIsLoadingReview(false);
    }

  const okModalAvaliacaoCriada = async () => {
    navigation.goBack();
  }

  const buscarDadosPodologo = async () => {
    setIsLoading(true);
      try {
          const response = await api.get(`/user/${route.params.userId}`);
          setDadosPodologo(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao buscar o podologo:', error);
          setRequestError(error);
        }
      setIsLoading(false);
  };

  useEffect(() => {
      buscarDadosPodologo();
    }, []);

  if(isLoading) {
      return (
      <SafeAreaView className='flex h-full w-full bg-branco'>
          <ActivityIndicator className='m-auto' size={80} color="#2087ED" /> 
      </SafeAreaView>
      );
  }

  if (requestError) {
    return(
        <SafeAreaView className='flex h-full w-full bg-branco'>
            <Text className='m-auto text-[16px] text-azul'>Erro ao obter dados do podologo.</Text>
        </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className='flex w-full bg-branco'>
      <ScrollView className='flex space-y-5 px-5'>
        <View className='flex items-center justify-center pt-5'>
          <Image className='h-24 w-24 rounded-full' source={dadosPodologo.profile_picture ? { uri: dadosPodologo.profile_picture } : PerfilImage} />
          <View className='mt-3 flex flex-row items-center justify-center space-x-2 rounded-md bg-zinc-100 p-1'>
            <Entypo name='star' size={20} color='black' />
            <Text className='font-semibold'>{dadosPodologo.avg.rating}</Text>
          </View>
        </View>
        <View className='flex space-y-6'>
          <ProfileInfo label='Nome' text={dadosPodologo.first_name} />
          <ProfileInfo label='Sobrenome' text={dadosPodologo.last_name} />
          <ProfileInfo
            label='Email'
            text={dadosPodologo.email}
          />
          <ProfileInfo label='Telefone' text={dadosPodologo.phone_number} />
          <ProfileInfo label='Cep' text={dadosPodologo.cep} />
          <ProfileInfo
            retornavel={true}
            label='Formação'
            text={dadosPodologo.doctor.institution}
            ensino={dadosPodologo.doctor.degree_type}
            formacao={dadosPodologo.doctor.degree_year}
          />
        </View>
        <View className='w-[80%] self-center border-b-[1px] opacity-10' />
        {route.params.consultaConcluida &&
        <View className='flex space-y-5'>
          <View className='flex w-[75%] flex-row justify-between self-center'>
            <TouchableOpacity onPress={() => novaNota(1)}>
              <Entypo name={notas[0]} size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => novaNota(2)}>
              <Entypo name={notas[1]} size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => novaNota(3)}>
              <Entypo name={notas[2]} size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => novaNota(4)}>
              <Entypo name={notas[3]} size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => novaNota(5)}>
              <Entypo name={notas[4]} size={30} color='black' />
            </TouchableOpacity>
          </View>

          <Formik
            innerRef={formikRef}
            initialValues={{
              comment: '',
            }}
            onSubmit={(values) => {
              if (notas[0] === "star-outlined") {
                Alert.alert(
                  'Erro',
                  'Você deve fornecer uma nota para a avaliação.'
                );
                return;
              }
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
            <Input className='w-[100%] py-4' 
            placeholder='Avaliação' 
            onChangeText={handleChange('comment')}
            onBlur={handleBlur('comment')}
            value={values.comment} />
            )}
          </Formik>
          <View className='flex w-full items-center space-y-4'>
            <Button className='w-full' placeholder='Avaliar' onPress={handleSubmit} loading={isLoadingReview} disabled={isLoadingReview} />
            <Button
              onPress={() => navigation.navigate('DenunciaPodologo', { userId: dadosPodologo.user_id })}
              className='w-full'
              placeholder='Denunciar'
            />
          </View>
        </View>}
        <View className='mb-24 flex w-full space-y-4'>
          {/* Mapeando todas as avaliações do usuário */}
          {dadosPodologo.user_reviews 
          ?
          dadosPodologo.user_reviews.map((item, index) => (
            <Avaliacao key={index} nome={item.first_name + " " + item.last_name} comentario={item.comment} nota={item.rating} />
          ))
          :
          <Text className='text-center text-gray-500'>
            Nenhuma avaliação encontrada.
          </Text>
          }
        </View>
      </ScrollView>
      <ModalOk
        modalVisible={visibilidadeAvaliacaoCriada} 
        mensagem='Avaliação enviada com sucesso!' 
        onOkClick={okModalAvaliacaoCriada} 
      />
      <ModalOk 
        modalVisible={visibilidadeErroAoCriarAvaliacao} 
        mensagem='Você já fez uma avaliação para esse usuário!' 
        onOkClick={() => setVisibilidadeErroAoCriarAvaliacao(false)} 
      />
    </SafeAreaView>
  );
}
