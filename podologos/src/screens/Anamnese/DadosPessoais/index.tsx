import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../../../components/Header';
import { FormData } from '../../../components/FormData/Index';
import Input from '../../../components/FormData/InputForm';
import { Button } from '../../../components/Button';
import { Dropdown } from 'react-native-element-dropdown';
import { useRef, useState } from 'react';
import { regex } from '../../../components/ReGex';

export default function DadosPessoais({ navigation }) {
  let formikRef = useRef(null);
  const [sexoValue, setSexoValue] = useState();
  const [dropdownIsFocus, setDropdownIsFocus] = useState(false);
  
  const handleSubmit = () => {
    if (formikRef.current) {
      // propriedade submitForm fornecida pelo Formik para disparar a submissão do formulário quando o botão for pressionado
      formikRef.current.submitForm();
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    const dataSeparada = data.birth_date.split('/')
    const dataFormatada = (new Date(dataSeparada[2], dataSeparada[1], dataSeparada[0])).toISOString();
    const infoDadosPessoais = {
      birth_date: dataFormatada,
      profession: data.profession,
      sex: sexoValue,
    };
    console.log('dados pessoais:', infoDadosPessoais);
    navigation.navigate('Avaliacao', {infoDadosPessoais});
  };

  const valoresDropdown = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
  ];

  const initialValues = {
    birth_date: '',
    profession: '',
    nome: '',
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    uf: '',
    telefone: ''
  };

  const column = [
    {
      name: 'nome',
      placeholder: 'Nome',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'birth_date',
      placeholder: 'Nascimento',
      className: 'w-full',
      mascara: regex['data'],
      component: Input,
    },
    {
      name: 'cep',
      placeholder: 'CEP',
      className: 'w-full',
      mascara: regex['CEP'],
      component: Input,
    },
    {
      name: 'endereco',
      placeholder: 'Endereço',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'bairro',
      placeholder: 'Bairro',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'cidade',
      placeholder: 'Cidade',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'uf',
      placeholder: 'UF',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'telefone',
      placeholder: 'Telefone',
      className: 'w-full',
      mascara: regex['Telefone'],
      component: Input,
    },
    {
      name: 'profession',
      placeholder: 'Profissão',
      className: 'w-full',
      component: Input,
    },
  ];

  return (
    <SafeAreaView className='flex h-full w-full flex-col items-center bg-branco'>
      <ScrollView className='w-full px-5'>
        <Text className='mb-2 text-[20px] font-semibold text-titulo_anamnese'>
          Dados pessoais
        </Text>

        <View className='w-full'>
          <FormData.Root initialValues={initialValues} onSubmit={(values) => {
            onSubmit(values);
          }} innerRef={formikRef}>
            <FormData.Form retornavel={false} columns={column} id='formQuestion'>

              <View className='w-full my-4 text-gr'>
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
                  data={valoresDropdown}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!dropdownIsFocus ? 'Sexo' : '...'}
                  searchPlaceholder="Search..."
                  value={sexoValue}
                  onFocus={() => setDropdownIsFocus(true)}
                  onBlur={() => setDropdownIsFocus(false)}
                  onChange={item => {
                    setSexoValue(item.value);
                    setDropdownIsFocus(false);
                  }}
                />
              </View>

              <Button
                className='mt-2 w-full self-center'
                placeholder='Continuar'
                onPress={() => handleSubmit()}
              />
              <Button
                className='mb-6 mt-4 w-full self-center border-[1px] border-azul bg-branco'
                text='text-azul'
                placeholder='Preencher mais tarde'
                onPress={() => navigation.goBack()}
              />

            </FormData.Form>
          </FormData.Root>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
