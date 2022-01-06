import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthRoutes from "./tabs.routes";
import { Inicio } from "../screens/Inicio";
import theme from "../styles/theme";
import { Splash } from "../screens/Splash";
import { Orcamento } from "../screens/Orcamento";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator 
        screenOptions={{
            headerShown: false,
            
        }}
        initialRouteName="Splash"
    >

        <stackRoutes.Screen name="Inicio" component={Inicio}/>
        <stackRoutes.Screen name="Home" component={AuthRoutes}/>
        <stackRoutes.Screen name="Splash" component={Splash}/>
        <stackRoutes.Screen name="Budget" component={Orcamento}/>

    </stackRoutes.Navigator>
)

export default AppRoutes;