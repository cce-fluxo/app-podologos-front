import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainRoutes from "./main.routes";
import PodologosRoutes from "./podologo.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <PodologosRoutes />
    </NavigationContainer>
  );
}
