import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { navigationRef } from "./RootNavigation";
import MainStack from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
}
