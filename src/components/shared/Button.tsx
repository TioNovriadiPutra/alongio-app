import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  label: string;
  type?: "primary" | "secondary" | "info";
  onPress?: () => void;
};

const Button = ({ label, type = "primary", onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        type === "secondary"
          ? styles.containerSecondary
          : type === "info"
            ? styles.containerInfo
            : styles.containerPrimary,
      ]}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    borderRadius: 18,
    borderWidth: 1,
  },
  containerPrimary: {
    backgroundColor: "#AFC786",
    borderColor: "#453941",
  },
  containerSecondary: {
    backgroundColor: "#FFFDF7",
    borderColor: "#FFFDF7",
  },
  containerInfo: {
    backgroundColor: "#AAC9DC",
    borderColor: "#453941",
  },
  label: {
    fontFamily: "NunitoSans",
    fontSize: 17,
    fontWeight: "900",
    color: "#352F39",
    textAlign: "center",
  },
});
