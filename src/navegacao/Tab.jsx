import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const Tab = createBottomTabNavigator();

export default (props) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case "TelaA":
            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            break;

          case "TelaB":
            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            break;

          case "TelaC":
            iconName = focused ? "ios-list" : "ios-list-outline";
            break;

          default:
            break;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "blue",
      // tabBarShowLabel: false,
    })}
    initialRouteName="TelaB"
  >
    <Tab.Screen name="TelaA" component={TelaA} options={{ title: "Inicial" }} />
    <Tab.Screen name="TelaB" component={TelaB} options={{ title: "Meio" }} />
    <Tab.Screen name="TelaC" component={TelaC} options={{ title: "Final" }} />
  </Tab.Navigator>
);
