import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Objetivo 4: Ícones
import DashboardTab from './tabs/DashboardTab';
import ExplorarTab from './tabs/ExplorarTab';
import PerfilTab from './tabs/PerfilTab';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../assets/types/navigation'; // Verifique se o caminho está correto

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    // 1. Capture os parâmetros que vieram do Login
    const route = useRoute<RouteProp<RootStackParamList, 'Dashboard'>>();

    // Agora pegamos os dados que vieram do Login
    const { userName, voluntarioId } = route.params || {};

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;

                    if (route.name === 'Dashboard') iconName = 'home';
                    else if (route.name === 'Explorar') iconName = 'search';
                    else if (route.name === 'Perfil') iconName = 'person';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#00d4ff',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardTab}
                initialParams={{ userName, voluntarioId }}
            />
            <Tab.Screen
                name="Explorar"
                component={ExplorarTab}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilTab}
                initialParams={{ userName }}
            />
        </Tab.Navigator>
    );
}