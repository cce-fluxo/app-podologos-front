import { createStackNavigator } from '@react-navigation/stack';
import PerfilDoPaciente from '../../screens/Private/Podologo/PerfilDoPaciente';
import DenunciaPaciente from '../../screens/Private/Podologo/DenunciaPaciente';
import PacienteTabRoutes from './pacienteTab.routes';

const Stack = createStackNavigator();

function PodologosRoutes() {
  return (
    <Stack.Navigator
      initialRouteName='TabRoutes'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='TabRoutes'
        component={PacienteTabRoutes}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PodologosRoutes;
