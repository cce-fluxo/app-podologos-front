import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomePodologo from "../../screens/Private/Podologo/HomePodologo";
import InfoSolicitacaoConsulta from "../../screens/Private/Podologo/InfoSolicitacaoConsulta";
import NovaConsulta from "../../screens/Private/Paciente/NovaConsulta";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="NovaConsulta"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="InfoSolicitacaoConsulta"
        component={NovaConsulta}
      ></Stack.Screen>
      <Stack.Screen name="HomePodologo" component={NovaConsulta}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default HomeStack;
