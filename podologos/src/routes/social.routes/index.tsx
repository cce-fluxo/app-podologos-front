import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/SignedOut/Login";
import PreLogin from "../../screens/SignedOut/PreLogin";

const Stack = createStackNavigator();
// onPress={() => {
//   navigation.navigate("Perfil");
// }}

export default function StackRoutes() {
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
    </Stack.Navigator>
  );
}
