import { createStackNavigator } from '@react-navigation/stack';
import PacienteTabRoutes from './pacienteTab.routes';
import PerfilDoPodologo from '../../screens/Private/Paciente/PerfilDoPodologo';
import DenunciaPodologo from '../../screens/Private/Paciente/DenunciaPodologo';

const Stack = createStackNavigator();

function PacientesRoutes() {
  return (
    <Stack.Navigator initialRouteName='TabRoutes'>
      <Stack.Screen
        name='TabRoutes'
        component={PacienteTabRoutes}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='PerfilDoPodologo'
        component={PerfilDoPodologo}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Perfil do podólogo',
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
      ></Stack.Screen>
      <Stack.Screen
        name='DenunciaPodologo'
        component={DenunciaPodologo}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: '#0A284D',
          title: 'Confirmar denúncia',
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
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PacientesRoutes;
