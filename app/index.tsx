import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../assets/types/navigation';
import Login from './login';
import Apresentacao from './apresentacao';
import Dashboard from './Dashboard';


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
        component={Dashboard}
        options={{ title: 'Dashboard Principal' }}
      />

    </Stack.Navigator >

  );
}