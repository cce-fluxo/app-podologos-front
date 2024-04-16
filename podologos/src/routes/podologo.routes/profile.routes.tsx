import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PerfilPodologo from "../../screens/Private/Podologo/PerfilPodologo";

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PerfilPodologo"
        component={PerfilPodologo}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default ProfileStack;
