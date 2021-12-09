import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { SubRoutes } from './sub.routes';


export function Routes(){

    return(
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
}