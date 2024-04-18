import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/SignedOut/Login";
import PreLogin from "../screens/SignedOut/PreLogin";
import DenunciaPaciente from "../screens/Private/Podologo/DenunciaPaciente";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="DenunciaPaciente"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="PreLogin"
        component={PreLogin}
        options={{
          headerTitleAlign: "center",
          headerShown: false,
          title: "Tela A",
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          title: "LoginPage",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
        component={Login}
      />
      <Stack.Screen
        name="DenunciaPaciente"
        component ={DenunciaPaciente}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
}
