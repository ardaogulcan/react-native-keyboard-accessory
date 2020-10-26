import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ViewExample from "./screens/ViewExample";
import NavigationViewExample from "./screens/NavigationViewExample";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ViewExample">
      <Stack.Screen name="ViewExample" component={ViewExample} />
      <Stack.Screen
        name="NavigationViewExample"
        component={NavigationViewExample}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
