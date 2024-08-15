import { useContext } from 'react';
import useAuth from '../context/AuthContext';
import PodologosRoutes from './podologo.routes';
import SocialRoutes from './social.routes';
import AuthContext from '../context/AuthContext';
import PacientesRoutes from './paciente.routes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function MainRoutes() {
  
  function RenderRoutes(){
    //  const { token, user } = useAuth();
    const { signed, signIn, user } = useContext(AuthContext);

    if (signed && user) {
      return (
        <Stack.Screen name='PacientesRoutes' component={PacientesRoutes} />
      );
    } else return <Stack.Screen name='SocialRoutes' component={SocialRoutes} />;
  }
return <Stack.Navigator screenOptions={{headerShown:false}}> {RenderRoutes()}</Stack.Navigator>;
  }
