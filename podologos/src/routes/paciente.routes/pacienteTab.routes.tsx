import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import HomePacienteStack from './homePaciente.routes';
import ConsultasPacienteStack from './consultasPaciente.routes';
import ProfilePacitenteStack from './profilePaciente.routes';

const Tab = createBottomTabNavigator();

// onPress={() => {
//   navigation.navigate("Perfil");
// }}

export default function PacienteTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2087ED',
        tabBarInactiveTintColor: '#2087ED60',
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 15,
          borderTopWidth: 0,
          backgroundColor: '#FFF',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomePacienteStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name='home' size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='ConsultasStack'
        component={ConsultasPacienteStack}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Consultas',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='plus-square' size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfilePacitenteStack}
        options={{
          headerTitleAlign: 'center',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user-circle' size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
