import { createStackNavigator } from '@react-navigation/stack';
import PerfilDoPaciente from '../../screens/Private/Podologo/PerfilDoPaciente';
import DenunciaPaciente from '../../screens/Private/Podologo/DenunciaPaciente';
import PacienteTabRoutes from './pacienteTab.routes';
import PerfilDoPodologo from '../../screens/Private/Paciente/PerfilDoPodologo';

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
          title: 'Perfil do paciente',
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
        name='DenunciaPaciente'
        component={DenunciaPaciente}
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
