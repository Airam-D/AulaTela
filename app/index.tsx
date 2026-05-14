import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../assets/types/navigation';
import Apresentacao from './apresentacao';
import Login from './login';
import TabNavigator from './TabNavigator';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (

    <Stack.Navigator initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Acesso', headerShown: false }}
      />
      <Stack.Screen
        name="Apresentacao"
        component={Apresentacao}
        options={{ title: 'Apresentação' }}
      />
      <Stack.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{ title: 'Dashboard Principal' }}
      />

    </Stack.Navigator >

  );
}