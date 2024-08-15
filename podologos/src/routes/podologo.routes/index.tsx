import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import PerfilDoPaciente from '../../screens/Private/Podologo/PerfilDoPaciente';
import DenunciaPaciente from '../../screens/Private/Podologo/DenunciaPaciente';

const Stack = createStackNavigator();

function PodologosRoutes() {
  return (
    <Stack.Navigator initialRouteName='TabRoutes'>
      <Stack.Screen
        name='TabRoutes'
        component={TabRoutes}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='PerfilDoPaciente'
        component={PerfilDoPaciente}
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

export default PodologosRoutes;
