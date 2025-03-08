import { createStackNavigator } from '@react-navigation/stack';
import DenunciaPodologo from '../../screens/Private/Paciente/DenunciaPodologo';
import DadosPessoais from '../../screens/Anamnese/DadosPessoais';
import Avaliacao from '../../screens/Anamnese/Avaliacao';

const Stack = createStackNavigator();

function AnamneseRoutes() {
  return (
    <Stack.Navigator initialRouteName='DadosPessoais'>
      <Stack.Screen
        name='DadosPessoais'
        component={DadosPessoais}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Avaliacao'
        component={Avaliacao}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AnamneseRoutes;
