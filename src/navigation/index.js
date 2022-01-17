import { createStackNavigator } from "@react-navigation/stack";
import NewsStack from "./NewsStack";
import News from "../screens/News";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="home"
        component={NewsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{ headersShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
