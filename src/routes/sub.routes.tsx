import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screens/Home';



const { Navigator, Screen } = createStackNavigator();

export function SubRoutes(){
    return(
        <Navigator>
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}