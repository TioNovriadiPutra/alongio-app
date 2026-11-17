import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const BottomTab = (props: BottomTabBarProps) => {
  const [boxWidth, setBoxWidth] = useState(0);

  const boxAnimatedValue = useSharedValue(0);

  const boxAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(boxAnimatedValue.value * (boxWidth + 9)),
      },
    ],
  }));

  useEffect(() => {
    boxAnimatedValue.value = props.state.index;
  }, [props.state]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Image
          source={require("../../../assets/images/home.webp")}
          style={styles.vector}
        />

        <Text
          style={[
            styles.label,
            { fontWeight: props.state.index === 0 ? "900" : "600" },
          ]}
        >
          Home
        </Text>

        <Animated.View
          onLayout={(event) => {
            setBoxWidth(event.nativeEvent.layout.width);
          }}
          style={[styles.box, boxAnimatedStyle]}
        />
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Explore")}
      >
        <Image
          source={require("../../../assets/images/explore.webp")}
          style={styles.vector}
        />

        <Text
          style={[
            styles.label,
            { fontWeight: props.state.index === 1 ? "900" : "600" },
          ]}
        >
          Explore
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("MyDay")}
      >
        <Image
          source={require("../../../assets/images/myDay.webp")}
          style={styles.vector}
        />

        <Text
          style={[
            styles.label,
            { fontWeight: props.state.index === 1 ? "900" : "600" },
          ]}
        >
          My Day
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Me")}
      >
        <Image
          source={require("../../../assets/images/me.webp")}
          style={styles.vector}
        />

        <Text
          style={[
            styles.label,
            { fontWeight: props.state.index === 2 ? "900" : "600" },
          ]}
        >
          Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    zIndex: 997,
    bottom: 26,
    left: 14,
    right: 14,
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 26,
    backgroundColor: "#FFFDF7",
    borderColor: "#453941",
    gap: 9,
  },
  vector: {
    width: 30,
    height: 28,
    zIndex: 2,
  },
  label: {
    fontFamily: "NunitoSans",
    fontSize: 11,
    color: "#453941",
    zIndex: 2,
  },
  button: {
    flex: 1,
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 58,
    borderRadius: 19,
  },
  box: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#E6EDDB",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#453941",
    zIndex: 1,
  },
});
