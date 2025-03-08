import { createStackNavigator } from '@react-navigation/stack';
import DenunciaPodologo from '../../screens/Private/Paciente/DenunciaPodologo';
import DadosPessoais from '../../screens/Anamnese/DadosPessoais';
import Avaliacao from '../../screens/Anamnese/Avaliacao';
import MotivoVisita from '../../screens/Anamnese/MotivoVisita';
import Deformidades from '../../screens/Anamnese/Deformidades';
import Limitacoes from '../../screens/Anamnese/Limitacoes';

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
      <Stack.Screen
        name='MotivoVisita'
        component={MotivoVisita}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Deformidades'
        component={Deformidades}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Limitacoes'
        component={Limitacoes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AnamneseRoutes;
