import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/Header';
import { FormData } from '../../../components/FormData/Index';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';
import Checkbox from 'expo-checkbox';
import { useRef, useState } from 'react';
import { Formik } from 'formik';
import InputCheckbox from '../../../components/InputCheckbox';
import { Dropdown } from 'react-native-element-dropdown';
import api from '../../../services/axios';
import ModalOk from '../../../components/PopUps/ModalOk';

export default function Limitacoes({ route, navigation }) {
  let formikRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalAnamnesePreenchidaVisivel, setModalAnamnesePreenchidaVisivel] = useState(false);

  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  async function closeModalAnamnesePreenchida () {
    setModalAnamnesePreenchidaVisivel(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'TabRoutes' }],
    });
  }

  async function handleFormSubmit(values) {
    setIsLoading(true);
    const infoLimitacoes = values;
    const infoDadosPessoais = route.params.infoDadosPessoais;
    const infoAvaliacao = route.params.infoAvaliacao;
    const infoMotivoVisita = route.params.infoMotivoVisita;
    const infoDeformidades = route.params.infoDeformidades;
    const dadosAnamnese = {
      ...infoDadosPessoais,
      ...infoAvaliacao,
      ...infoMotivoVisita,
      ...infoDeformidades,
      ...infoLimitacoes
    };
    console.log('vamos todos cantar de coração', dadosAnamnese);

    try {
      const response = await api.patch(`/patient/atualizar-anamnese`, dadosAnamnese);
      console.log(response.data);
      console.log(response);
      setModalAnamnesePreenchidaVisivel(true);
    } catch (error) {
      console.error('Erro ao atualizar anamnese:', error);
    }

    setIsLoading(false);
  }

  const initialValues = {
    wheelchair: false,
    cruthes: false,
    walker: false,
    cane: false,
    bedridden: false,
    homebound: false
  };

  const checkboxes = [
    { nome: "Cadeirante", valueName: "wheelchair" },
    { nome: "Muleta", valueName: "cruthes" },
    { nome: "Andador", valueName: "walker" },
    { nome: "Bengala", valueName: "cane" },
    { nome: "Acamado", valueName: "bedridden" },
    { nome: "Atendimento Domiciliar", valueName: "homebound" }
];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full'>
        <View className='flex items-center'>
          <Text className='mb-2 w-[90%] text-[20px] font-semibold text-titulo_anamnese'>
            Limitações
          </Text>

          <View className='w-full'>
            <Formik
              innerRef={formikRef}
              // validationSchema={LoginSchema}
              initialValues={initialValues}
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
                setFieldValue
              }) => (
                <View className='mt-3 flex w-full items-center justify-center space-y-2'>
                  {checkboxes.map((item, index) => 
                    <InputCheckbox
                      key={index}
                      texto={item.nome} 
                      value={values[item.valueName]} 
                      onValueChange={(value) => setFieldValue(item.valueName, value)} 
                    />
                  )}
                </View>
              )}
            </Formik>
          </View>

          <Button className='self-center mb-4' placeholder='Finalizar Anamnese' onPress={handleSubmit} disabled={isLoading} loading={isLoading} />
        </View>
      </ScrollView>
      <ModalOk
        modalVisible={modalAnamnesePreenchidaVisivel}
        mensagem='Anamnese preenchida com sucesso!'
        onOkClick={closeModalAnamnesePreenchida}
      />
    </SafeAreaView>
  );
}
