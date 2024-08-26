import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/SignedOut/Login';
import PreLogin from '../../screens/SignedOut/PreLogin';
import CadastroPaciente from '../../screens/SignedOut/CadastroPaciente';
import CadastroPodologo from '../../screens/SignedOut/CadastroPodologo';
import Email from '../../screens/SignedOut/ForgotPassword/Email';
import Codigo from '../../screens/SignedOut/ForgotPassword/Codigo';
import NovaSenha from '../../screens/SignedOut/ForgotPassword/NovaSenha';
import FormacaoPodologo from '../../screens/SignedOut/FormacaoPodologo';
import Avaliacao from '../../screens/Anamnese/Avaliacao';

const Stack = createStackNavigator();

export default function SocialRoutes() {
  return (
    <Stack.Navigator
      initialRouteName='PreLogin'
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name='PreLogin'
        component={PreLogin}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='CadastroPaciente'
        component={CadastroPaciente}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Nova Conta',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      />
      <Stack.Screen
        name='CadastroPodologo'
        component={Avaliacao}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Nova Conta',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      />

      <Stack.Screen
        name='Email'
        component={Email}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Esqueci minha senha',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      />
      <Stack.Screen
        name='Codigo'
        component={Codigo}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Recuperar senha',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      />
      <Stack.Screen
        name='NovaSenha'
        component={NovaSenha}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Nova senha',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      />
      <Stack.Screen
        name='FormacaoPodologo'
        component={FormacaoPodologo}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Formação',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FBFBFB',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'medium',
          },
        }}
      />
    </Stack.Navigator>
  );
}
