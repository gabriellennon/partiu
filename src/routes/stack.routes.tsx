import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthRoutes from "./tabs.routes";
import { Inicio } from "../screens/Inicio";
import theme from "../styles/theme";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator 
        screenOptions={{
            headerShown: false,
            
        }}
    >

        <stackRoutes.Screen name="Inicio" component={Inicio}/>
        <stackRoutes.Screen name="Home" component={AuthRoutes}/>

    </stackRoutes.Navigator>
)

export default AppRoutes;