import { ArrowDown2, CloseCircle, TickCircle } from "iconsax-react-nativejs";
import { useEffect, useState } from "react";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { oneTimeReminderDropdown } from "../../lib/dummyData";
import { Image } from "expo-image";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  field: ControllerRenderProps<any, any>;
  error?: FieldError;
};

const ForDropdown = ({ field, error }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownAnimatedValue = useSharedValue(0);

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      dropdownAnimatedValue.value,
      [0, 1],
      [100, 0],
    );

    return {
      transform: [{ translateY: `${translateY}%` }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>For</Text>

        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>

      <TouchableOpacity
        style={[styles.inputContainer, error && styles.inputContainerError]}
        onPress={() => setShowDropdown(true)}
      >
        <Text style={styles.input}>
          {field.value
            ? (oneTimeReminderDropdown.find((item) => item.id === field.value)
                ?.name ?? "Both")
            : "Pick one..."}
        </Text>

        <ArrowDown2 size={20} color="#453941" />
      </TouchableOpacity>

      <Modal
        visible={showDropdown}
        transparent
        onShow={() => {
          dropdownAnimatedValue.value = withTiming(1);
        }}
      >
        <View style={styles.backdrop}>
          <Animated.View
            style={[styles.dropdownContainer, dropdownAnimatedStyle]}
          >
            <View style={styles.header}>
              <Text style={styles.title}>Who’s it for?</Text>

              <TouchableOpacity
                onPress={() => {
                  dropdownAnimatedValue.value = withTiming(0);
                  setTimeout(() => {
                    setShowDropdown(false);
                  }, 300);
                }}
              >
                <CloseCircle size={24} color="#453941" />
              </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}>
              Choose who gets this little reminder.
            </Text>

            <View style={styles.dropdownList}>
              {oneTimeReminderDropdown.map((item, index) => (
                <TouchableOpacity
                  key={index.toString()}
                  style={[
                    styles.dropdownButton,
                    {
                      backgroundColor:
                        field.value === item.id ? "#AAC9DC" : "#FFFDF7",
                    },
                  ]}
                  onPress={() => {
                    field.onChange(item.id);
                    dropdownAnimatedValue.value = withTiming(0);
                    setTimeout(() => {
                      setShowDropdown(false);
                    }, 300);
                  }}
                >
                  <View
                    style={[
                      styles.circle,
                      {
                        backgroundColor:
                          item.status === "yellow"
                            ? "#F8EFCF"
                            : item.status === "blue"
                              ? "#E2EDF2"
                              : "#F4DED2",
                      },
                    ]}
                  >
                    <Image
                      source={
                        item.status === "blue"
                          ? require("../../../assets/images/profilePartner.webp")
                          : require("../../../assets/images/profileMe.webp")
                      }
                      style={styles.vector}
                    />
                  </View>

                  <View style={styles.dropdownDescription}>
                    <Text style={styles.name}>{item.name}</Text>

                    <Text style={styles.description}>{item.description}</Text>
                  </View>

                  {field.value === item.id && (
                    <TickCircle size={20} color="#453941" />
                  )}
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={[
                  styles.dropdownButton,
                  {
                    backgroundColor:
                      field.value ===
                      oneTimeReminderDropdown.map((item) => item.id).join("|")
                        ? "#AAC9DC"
                        : "#FFFDF7",
                  },
                ]}
                onPress={() => {
                  field.onChange(
                    oneTimeReminderDropdown.map((item) => item.id).join("|"),
                  );
                  dropdownAnimatedValue.value = withTiming(0);
                  setTimeout(() => {
                    setShowDropdown(false);
                  }, 300);
                }}
              >
                <View style={styles.vectorContainer}>
                  <View style={[styles.circle, { backgroundColor: "#F8EFCF" }]}>
                    <Image
                      source={require("../../../assets/images/profileMe.webp")}
                      style={styles.vector}
                    />
                  </View>

                  <View
                    style={[
                      styles.circle,
                      { backgroundColor: "#E2EDF2", marginLeft: -10 },
                    ]}
                  >
                    <Image
                      source={require("../../../assets/images/profilePartner.webp")}
                      style={styles.vector}
                    />
                  </View>
                </View>

                <View style={styles.dropdownDescription}>
                  <Text style={styles.name}>Both</Text>

                  <Text style={styles.description}>
                    A reminder for each of you.
                  </Text>
                </View>

                {field.value ===
                  oneTimeReminderDropdown.map((item) => item.id).join("|") && (
                  <TickCircle size={20} color="#453941" />
                )}
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default ForDropdown;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  labelContainer: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-end",
  },
  label: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "900",
    color: "#352F39",
  },
  error: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    color: "red",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 17,
    backgroundColor: "#FFFDF7",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D6C8BB",
  },
  inputContainerError: {
    borderWidth: 1,
    borderColor: "red",
  },
  input: {
    flex: 1,
    fontFamily: "NunitoSans",
    fontSize: 16,
    color: "#352F39",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(69,57,65,0.4)",
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: "flex-end",
  },
  dropdownContainer: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 55,
    backgroundColor: "#FAF4E9",
    borderWidth: 1,
    borderColor: "#D6C8BB",
    borderRadius: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 22,
    fontWeight: "900",
    color: "#352F39",
  },
  subTitle: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#352F39",
    marginBottom: 13,
  },
  dropdownList: {
    gap: 12,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingRight: 16,
    paddingLeft: 26,
    borderRadius: 18,
    gap: 22,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFFDF7",
    alignItems: "center",
    justifyContent: "center",
  },
  vector: {
    width: 24,
    height: 24,
  },
  dropdownDescription: {
    gap: 9,
    flex: 1,
  },
  name: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "800",
    color: "#352F39",
  },
  description: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    color: "#352F39",
  },
  vectorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
