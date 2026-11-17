import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Greeting: undefined;
  Register: undefined;
  VerifyEmail: {
    email: string;
  };
  Login: undefined;
};

export type MainAppTabParamList = {
  Home: undefined;
  MyDay: undefined;
  Me: undefined;
};

export type AppStackParamList = {
  MainApp: MainAppTabParamList;
  LittleKitchen: undefined;
  MoneyGarden: undefined;
  TinyPlanner: undefined;
  TinyPlannerAddReminder: undefined;
  HeartDiary: undefined;
  Playroom: undefined;
  BuddyAI: undefined;
};

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export const AppStack = createNativeStackNavigator<AppStackParamList>();
export const MainAppTab = createBottomTabNavigator<MainAppTabParamList>();

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>;

export type VerifyEmailRouteProp = RouteProp<AuthStackParamList, "VerifyEmail">;
