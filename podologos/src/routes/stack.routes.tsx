import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/SignedOut/Login";
import PreLogin from "../screens/SignedOut/PreLogin";
import DenunciaPaciente from "../screens/Private/Podologo/DenunciaPaciente";
import CadastroPaciente from "../screens/SignedOut/CadastroPaciente";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="CadastroPaciente"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "LoginPage",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="PreLogin"
        component={PreLogin}
        options={{
          headerTitleAlign: "center",
          headerShown: false,
          title: "Tela A",
        }}
      />
    </Stack.Navigator>
  );
}
