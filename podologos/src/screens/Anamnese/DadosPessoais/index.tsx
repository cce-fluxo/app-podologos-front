import { SafeAreaView, ScrollView, Text } from 'react-native';
import Header from '../../../components/Header';
import { FormData } from '../../../components/FormData/Index';
import Input from '../../../components/Inputs';
import { Button } from '../../../components/Button';

export default function DadosPessoais() {
  const onSubmit = (data: any) => {};

  const column = [
    {
      name: 'nome',
      placeholder: 'Nome',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'nascimetno',
      placeholder: 'Nascimento',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'cep',
      placeholder: 'CEP',
      className: 'w-full',
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
      component: Input,
    },
    {
      name: 'sexo',
      placeholder: 'Sexo',
      className: 'w-full',
      component: Input,
    },
    {
      name: 'profissao',
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
        <FormData.Root onSubmit={onSubmit}>
          <FormData.Form retornavel={false} columns={column} id='formQuestion'>
            <Button
              className='mt-2 w-full self-center'
              placeholder='Continuar'
            ></Button>
            <Button
              className='mb-6 mt-4 w-full self-center border-[1px] border-azul bg-branco'
              text='text-azul'
              placeholder='Preencher mais tarde'
            ></Button>
          </FormData.Form>
        </FormData.Root>
      </ScrollView>
    </SafeAreaView>
  );
}
