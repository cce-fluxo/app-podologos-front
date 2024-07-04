import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./tab.routes";
import PerfilDoPaciente from "../../screens/Private/Podologo/PerfilDoPaciente";
import DenunciaPaciente from "../../screens/Private/Podologo/DenunciaPaciente";

const Stack = createStackNavigator();

function PodologosRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="TabRoutes"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TabRoutes" component={TabRoutes}></Stack.Screen>
      <Stack.Screen
        name="PerfilDoPaciente"
        component={PerfilDoPaciente}
      ></Stack.Screen>
      <Stack.Screen
        name="DenunciaPaciente"
        component={DenunciaPaciente}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default PodologosRoutes;
