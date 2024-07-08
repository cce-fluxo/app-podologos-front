import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainRoutes from "./main.routes";
import PodologosRoutes from "./podologo.routes";
import SocialRoutes from "./social.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <SocialRoutes />
    </NavigationContainer>
  );
}
