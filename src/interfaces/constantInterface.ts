import { ImageProps } from "expo-image";
import { AppStackParamList } from "../lib/navigation";

export interface MainMenuType {
  label: string;
  dest: Exclude<keyof AppStackParamList, "MainApp">;
  image: ImageProps["source"];
  color: string;
}
