import { useContext } from 'react';
import useAuth from '../context/AuthContext';
import PodologosRoutes from './podologo.routes';
import SocialRoutes from './social.routes';
import AuthContext from '../context/AuthContext';
import PacientesRoutes from './paciente.routes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainRoutes() {
  const { signed, signIn, user } = useContext(AuthContext);
  console.log('Estado do login (Main) :', signed);
  if (signed && user) {
    if (user.doctor_id) return <PodologosRoutes />;
    else return <PacientesRoutes />;
  } else return <SocialRoutes />;
}
