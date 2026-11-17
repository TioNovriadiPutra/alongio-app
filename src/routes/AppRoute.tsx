import { AppStack, MainAppTab } from "../lib/navigation";
import {
  Home,
  Me,
  MyDay,
  TinyPlanner,
  TinyPlannerAddReminder,
} from "../pages/app";
import { BottomTab } from "../components/custom";

const MainAppRoute = () => {
  return (
    <MainAppTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTab {...props} />}
    >
      <MainAppTab.Screen name="Home" component={Home} />
      <MainAppTab.Screen name="MyDay" component={MyDay} />
      <MainAppTab.Screen name="Me" component={Me} />
    </MainAppTab.Navigator>
  );
};

const AppRoute = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="MainApp" component={MainAppRoute} />
      <AppStack.Screen name="TinyPlanner" component={TinyPlanner} />
      <AppStack.Screen
        name="TinyPlannerAddReminder"
        component={TinyPlannerAddReminder}
      />
    </AppStack.Navigator>
  );
};

export default AppRoute;
