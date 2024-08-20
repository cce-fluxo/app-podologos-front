import { useContext } from 'react';
import useAuth from '../context/AuthContext';
import PodologosRoutes from './podologo.routes';
import SocialRoutes from './social.routes';
import AuthContext from '../context/AuthContext';
import PacientesRoutes from './paciente.routes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainRoutes() {
  //  const { token, user } = useAuth();
  const { signed, signIn, user } = useContext(AuthContext);
  console.log(signed);
  if (signed && user) {
    return <PacientesRoutes />;
  } else return <SocialRoutes />;
}
