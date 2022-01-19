import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthRoutes from "./tabs.routes";
import { Inicio } from "../screens/Inicio";
import theme from "../styles/theme";
import { Splash } from "../screens/Splash";
import { Orcamento } from "../screens/Orcamento";
import { AddTransaction } from "../screens/AddTransaction";
import { Checklist } from "../screens/Checklist";
import { Local } from "../screens/Local";
import { Gas } from "../screens/Gas";
import { SignIn } from "../screens/SignIn";
import { DesViagem } from "../screens/DesViagem";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator 
        screenOptions={{
            headerShown: false,
            
        }}
        initialRouteName="Splash"
    >

        <stackRoutes.Screen name="SignIn" component={SignIn}/>
        <stackRoutes.Screen name="Inicio" component={Inicio}/>
        <stackRoutes.Screen name="Go" component={DesViagem}/>
        <stackRoutes.Screen name="Home" component={AuthRoutes}/>
        <stackRoutes.Screen name="Splash" component={Splash}/>
        <stackRoutes.Screen name="Budget" component={Orcamento}/>
        <stackRoutes.Screen name="AddTransaction" component={AddTransaction}/>
        <stackRoutes.Screen name="Checklist" component={Checklist}/>
        <stackRoutes.Screen name="Local" component={Local}/>
        <stackRoutes.Screen name="Gas" component={Gas}/>

    </stackRoutes.Navigator>
)

export default AppRoutes;