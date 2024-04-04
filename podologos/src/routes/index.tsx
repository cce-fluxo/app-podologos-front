import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
