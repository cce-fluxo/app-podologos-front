import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SocialRoutes from './social.routes';
import PodologosRoutes from './podologo.routes';
import PacientesRoutes from './paciente.routes';

export default function TesteRoutes() {
  return <PodologosRoutes />;
}
