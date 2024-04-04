import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import Login from "../screens/SignedOut/Login";
import PreLogin from "../screens/SignedOut/PreLogin";
import HomePodologo from "../screens/Private/Podologo/HomePodologo";
import ConsultasAceitas from "../screens/Private/Podologo/ConsultasAceitas";

const Tab = createBottomTabNavigator();

// onPress={() => {
//   navigation.navigate("Perfil");
// }}

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2087ED", // Cor ativa
        tabBarInactiveTintColor: "#2087ED60",
      }}
    >
      <Tab.Screen
        name="HomePodologo"
        component={HomePodologo}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ConsultasAceitas"
        component={ConsultasAceitas}
        options={{
          headerTitleAlign: "center",
          tabBarLabel: "Consultas",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-square-o" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
