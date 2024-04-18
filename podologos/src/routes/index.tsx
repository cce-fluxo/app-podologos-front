import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import PodologosRoutes from "./podologo.routes";
import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
