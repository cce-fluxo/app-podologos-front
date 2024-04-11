import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Login from "../screens/SignedOut/Login";
import PreLogin from "../screens/SignedOut/PreLogin";
import HomePodologo from "../screens/Private/Podologo/HomePodologo";
import ConsultasAceitas from "../screens/Private/Podologo/ConsultasAceitas";
import PerfilPodologo from "../screens/Private/Podologo/PerfilPodologo";
import Home from "../routes/stack.routes";

const Tab = createBottomTabNavigator();

// onPress={() => {
//   navigation.navigate("Perfil");
// }}

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2087ED",
        tabBarInactiveTintColor: "#2087ED60",
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: "below-icon",
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          borderTopWidth: 0,
          backgroundColor: "#FFF",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
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
            <FontAwesome name="plus-square" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PerfilPodologo"
        component={PerfilPodologo}
        options={{
          headerTitleAlign: "center",
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
