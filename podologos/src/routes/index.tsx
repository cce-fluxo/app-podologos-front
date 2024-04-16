import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import PodologosRoutes from "./podologo.routes/index";
import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <PodologosRoutes />
    </NavigationContainer>
  );
}
