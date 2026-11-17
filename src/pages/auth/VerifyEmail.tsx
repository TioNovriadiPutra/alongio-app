import {
  StyleSheet,
  Text,
  TextInput,
  TextInputInstance,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthHeader, Button, Container } from "../../components/shared";
import { Image } from "expo-image";
import { useRoute } from "@react-navigation/native";
import { VerifyEmailRouteProp } from "../../lib/navigation";
import { Controller, useForm } from "react-hook-form";
import { useRef } from "react";

const VerifyEmail = () => {
  const inputRefs = useRef<(TextInputInstance | null)[]>([]);

  const route = useRoute<VerifyEmailRouteProp>();

  const { control } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  return (
    <Container>
      <AuthHeader
        title="Check your email"
        subTitle="A little step to keep your space secure."
        color="#F8EFCF"
      />

      <View style={styles.body}>
        <Image
          source={require("../../../assets/images/star.webp")}
          style={styles.vector}
        />

        <Text style={styles.instruction}>Enter the 6-digit code sent to</Text>

        <Text style={styles.email}>{route.params.email}</Text>

        <Controller
          control={control}
          name="otp"
          render={({ field }) => (
            <View style={styles.otpContainer}>
              {Array.from({ length: 6 }).map((_, index) => (
                <View key={index.toString()} style={styles.inputContainer}>
                  <TextInput
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    value={field.value[index] || ""}
                    onChangeText={(text) => {
                      const digit = text.replace(/\D/g, "").slice(-1);

                      const digits = field.value.padEnd(6, " ").split("");

                      digits[index] = digit || " ";

                      field.onChange(digits.join("").trimEnd());

                      if (digit && index < 5) {
                        inputRefs.current[index + 1]?.focus();
                      }
                    }}
                    onKeyPress={(event) => {
                      if (event.nativeEvent.key === "Backspace" && index > 0) {
                        inputRefs.current[index - 1]?.focus();
                      }
                    }}
                    onBlur={field.onBlur}
                    keyboardType="number-pad"
                    maxLength={1}
                    selectTextOnFocus
                    style={styles.input}
                  />
                </View>
              ))}
            </View>
          )}
        />

        <Button label="Verify email" />

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkLabel}>Send a new code</Text>
        </TouchableOpacity>

        <Text style={styles.notes}>
          Can’t find it? Check your spam or junk folder.
        </Text>
      </View>
    </Container>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  vector: {
    alignSelf: "center",
    width: 80,
    height: 80,
    marginBottom: 27,
  },
  instruction: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "900",
    color: "#352F39",
    textAlign: "center",
    marginBottom: 8,
  },
  email: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    color: "#493B45",
    textAlign: "center",
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 52,
  },
  inputContainer: {
    width: 48,
    height: 56,
    backgroundColor: "#FFFDF7",
    borderRadius: 14,
    justifyContent: "center",
  },
  input: {
    fontFamily: "NunitoSans",
    fontSize: 24,
    fontWeight: "900",
    color: "#352F39",
    textAlign: "center",
  },
  linkLabel: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "900",
    color: "#453941",
  },
  linkButton: {
    alignSelf: "center",
    marginTop: 16,
    marginBottom: 52,
    paddingVertical: 14,
  },
  notes: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    color: "#352F39",
    textAlign: "center",
  },
});
