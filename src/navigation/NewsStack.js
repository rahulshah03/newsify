import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";

const Tab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 10.0,

          elevation: 12,
        },
      }}
    >
      <Tab.Screen
        name="news-stack"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? colors.black : colors.darkGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="search1"
              size={24}
              color={focused ? colors.black : colors.darkGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NewsStack;
