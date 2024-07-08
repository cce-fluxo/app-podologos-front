import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/SignedOut/Login";
import PreLogin from "../../screens/SignedOut/PreLogin";
import DenunciaPaciente from "../../screens/Private/Podologo/DenunciaPaciente";
import CadastroPaciente from "../../screens/SignedOut/CadastroPaciente";
import CadastroTeste from "../../screens/SignedOut/CadastroTeste";
import CadastroPodologo from "../../screens/SignedOut/CadastroPodologo";

const Stack = createStackNavigator();
export default function SocialRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="PreLogin"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="PreLogin"
        component={PreLogin}
        options={{
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroPaciente"
        component={CadastroPaciente}
        options={{
          headerBackTitleVisible: false, // Garante que a seta de volta seja visível
          headerTintColor: "black", // Cor da seta de volta
          title: "Nova Conta",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FBFBFB",
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 23,
            color: "#0A284D",
            fontWeight: "medium",
          },
        }}
      />
      <Stack.Screen
        name="CadastroPodologo"
        component={CadastroPodologo}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "black",
          title: "Nova Conta",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FBFBFB",
            height: 110,
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
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
