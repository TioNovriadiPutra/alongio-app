import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Container } from "../../../components/shared";
import { ArrowLeft2, Notification } from "iconsax-react-nativejs";
import { formatDate } from "../../../lib/helper";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TodayList } from "../../../components/custom";

const WIDTH = Dimensions.get("window").width;

const TinyPlanner = () => {
  const [page, setPage] = useState(0);

  const nav = useNavigation();

  const lineAnimatedValue = useSharedValue(0);

  const lineAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      lineAnimatedValue.value,
      [0, 1],
      [0, (WIDTH - 60) / 2],
    );

    return {
      transform: [{ translateX }],
    };
  });

  useEffect(() => {
    lineAnimatedValue.value = withTiming(page, { duration: 200 });
  }, [page]);

  return (
    <Container>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tiny Planner</Text>

          <TouchableOpacity style={styles.notifButton}>
            <Notification size={20} color="#453941" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => nav.goBack()}
          >
            <ArrowLeft2 size={24} color="#453941" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>
          {formatDate(new Date(), "EEEE, d MMMM")} · Shared with Tio
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabButton} onPress={() => setPage(0)}>
            <Text
              style={[
                styles.tabLabel,
                {
                  fontWeight: page === 0 ? "800" : "400",
                  color: page === 0 ? "#352F39" : "#66545F",
                },
              ]}
            >
              Today
            </Text>

            <Animated.View style={[styles.line, lineAnimatedStyle]} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabButton} onPress={() => setPage(1)}>
            <Text
              style={[
                styles.tabLabel,
                {
                  fontWeight: page === 1 ? "800" : "400",
                  color: page === 1 ? "#352F39" : "#66545F",
                },
              ]}
            >
              Routine
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <TodayList />
        </ScrollView>
      </View>
    </Container>
  );
};

export default TinyPlanner;

const styles = StyleSheet.create({
  header: {
    paddingTop: 57.5,
    paddingBottom: 21,
    paddingHorizontal: 24,
    backgroundColor: "#E2EDF2",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8.5,
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 24,
    fontWeight: "900",
    color: "#352F39",
  },
  notifButton: {
    position: "absolute",
    right: -8,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: -8,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#493B45",
  },
  body: {
    flex: 1,
    padding: 24,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 13,
  },
  tabLabel: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    textAlign: "center",
  },
  line: {
    position: "absolute",
    height: 3,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#86B4CC",
    borderRadius: 1.5,
  },
  scroll: {
    paddingBottom: 18,
  },
});
