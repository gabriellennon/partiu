import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";
import { AuthRoutes } from "./auth.routes";

const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
        {/* <AuthRoutes /> */}
    </NavigationContainer>
)

export default Routes;