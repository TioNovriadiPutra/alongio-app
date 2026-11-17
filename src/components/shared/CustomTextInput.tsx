import { useState } from "react";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  field: ControllerRenderProps<any, any>;
  label: string;
  placeholder?: string;
  type?: "text" | "password";
  error?: FieldError;
};

const CustomTextInput = ({
  field,
  label,
  placeholder = "Fill this field...",
  type = "text",
  error,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShow = () => setShowPassword((prev) => !prev);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>

        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>

      <View
        style={[styles.inputContainer, error && styles.inputContainerError]}
      >
        <TextInput
          value={field.value}
          placeholder={placeholder}
          secureTextEntry={type === "password" ? !showPassword : false}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          style={styles.input}
        />

        {type === "password" && (
          <TouchableOpacity onPress={onShow}>
            <Text style={styles.show}>{showPassword ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "900",
    color: "#352F39",
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
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  show: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    fontWeight: "900",
    color: "#453941",
  },
  error: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    color: "red",
  },
  labelContainer: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-end",
  },
});
