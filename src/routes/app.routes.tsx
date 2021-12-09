//Rotas privadas
import React from 'react';
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
//Eu podderia usar qualquer lib de icones Feather ou Material e etc
import { MaterialIcons } from '@expo/vector-icons';

//fazendo o menu tab bottom e  fazendo a navegacao nele
const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Contribuir } from '../screens/Contribuir';
import { More } from '../screens/More';
import { Inicio } from '../screens/Inicio';

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor:  theme.colors.text,
                //colocando o icone do lado do texto, para colocar em baixo só trar essa especificacao
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0 ,
                    height: 88
                },
                //tira o header default
                headerShown: false
            }}
            
        >
            {/* <Screen 
                name="Inicio"
                component={Inicio}
            /> */}
            <Screen 
                name="Partiu!"
                component={Inicio}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name="search"
                            size= {size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name="Contribuir"
                component={Contribuir}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name="add-circle-outline"
                            size= {size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name="Mais"
                component={More}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            name="format-list-bulleted"
                            size= {size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}