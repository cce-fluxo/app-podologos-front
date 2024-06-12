import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/SignedOut/Login";
import PreLogin from "../screens/SignedOut/PreLogin";
import DenunciaPaciente from "../screens/Private/Podologo/DenunciaPaciente";
import CadastroPaciente from "../screens/SignedOut/CadastroPaciente";
import CadastroTeste from "../screens/SignedOut/CadastroTeste";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="CadastroPaciente"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="CadastroPaciente"
        component={CadastroPaciente}
        options={{
          title: "Nova Conta",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FBFBFB",
            height: 60,
          },
          headerTitleStyle: {
            fontSize: 23,
            color: "#0A284D",
            fontWeight: "medium",

            // Ajuste o peso da fonte conforme necessário
          },
        }}
      />

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
