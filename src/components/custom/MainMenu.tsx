import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { mainMenu } from "../../lib/pageConst";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "../../lib/navigation";

const WIDTH = Dimensions.get("window").width;

const MainMenu = () => {
  const nav = useNavigation<AppNavigationProp>();

  return (
    <View style={styles.menuContainer}>
      <View style={styles.menu}>
        {mainMenu.slice(0, 3).map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.menuButton,
              {
                backgroundColor: item.color,
                width: (WIDTH - 48 - 24) / 3,
              },
            ]}
            onPress={() => nav.navigate(item.dest)}
          >
            <Image source={item.image} style={styles.menuVector} />

            <Text
              numberOfLines={item.label.includes(" ") ? 2 : 1}
              adjustsFontSizeToFit
              minimumFontScale={0.8}
              style={styles.menuLabel}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menu}>
        {mainMenu.slice(3, 6).map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.menuButton,
              {
                backgroundColor: item.color,
                width: (WIDTH - 48 - 24) / 3,
              },
            ]}
          >
            <Image source={item.image} style={styles.menuVector} />

            <Text
              numberOfLines={item.label.includes(" ") ? 2 : 1}
              adjustsFontSizeToFit
              minimumFontScale={0.8}
              style={styles.menuLabel}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  menuContainer: {
    gap: 12,
  },
  menu: {
    gap: 12,
    flexDirection: "row",
  },
  menuVector: {
    width: 48,
    height: 48,
  },
  menuButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#453941",
    gap: 8,
  },
  menuLabel: {
    fontFamily: "NunitoSans",
    fontSize: 13,
    fontWeight: "900",
    color: "#352F39",
    textAlign: "center",
  },
});
