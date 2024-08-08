import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SocialRoutes from './social.routes';
import PodologosRoutes from './podologo.routes';
import PacienteTabRoutes from './paciente.routes';
import TabRoutes from './podologo.routes/tab.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <PodologosRoutes />
    </NavigationContainer>
  );
}
