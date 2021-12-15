import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { Home } from "../screens/Home";
import theme from "../styles/theme";
import { Contribuir } from "../screens/Contribuir";
import { More } from "../screens/More";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                // activeBackgroundColor: theme.colors.background,
                // inactiveBackgroundColor: theme.colors.text,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS == 'ios' ? 20 : 0,
                    height: 88
                },
            }}
            screenOptions={{
                headerShown: false,
                
            }}
            >
            <AppTab.Screen
                name="Partiu?!"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="search"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Contribuir"
                component={Contribuir}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Mais"
                component={More}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;