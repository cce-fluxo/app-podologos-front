import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/SignedOut/Login";
import PreLogin from "../screens/SignedOut/PreLogin";

const Stack = createStackNavigator();

// onPress={() => {
//   navigation.navigate("Perfil");
// }}

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PreLogin"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="PreLogin" component={PreLogin} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}