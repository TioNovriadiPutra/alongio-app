import { MainMenuType } from "../interfaces/constantInterface";

export const greetingData = [
  {
    icon: require("../../assets/images/cook.webp"),
    label: "Cook",
  },
  {
    icon: require("../../assets/images/plan.webp"),
    label: "Plan",
  },
  {
    icon: require("../../assets/images/grow.webp"),
    label: "Grow",
  },
];

export const mainMenu: MainMenuType[] = [
  {
    label: "Little Kitchen",
    dest: "LittleKitchen",
    image: require("../../assets/images/littleKitchen.webp"),
    color: "#E8B18B",
  },
  {
    label: "Money Garden",
    dest: "MoneyGarden",
    image: require("../../assets/images/moneyGarden.webp"),
    color: "#B9CF99",
  },
  {
    label: "Tiny Planner",
    dest: "TinyPlanner",
    image: require("../../assets/images/tinyPlanner.webp"),
    color: "#B4CFDF",
  },
  {
    label: "Heart Diary",
    dest: "HeartDiary",
    image: require("../../assets/images/heartDiary.webp"),
    color: "#E6A6B5",
  },
  {
    label: "Playroom",
    dest: "Playroom",
    image: require("../../assets/images/playroom.webp"),
    color: "#BEA0D2",
  },
  {
    label: "Buddy AI",
    dest: "BuddyAI",
    image: require("../../assets/images/buddyAi.webp"),
    color: "#EBD16B",
  },
];
