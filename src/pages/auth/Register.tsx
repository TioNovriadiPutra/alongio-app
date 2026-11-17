import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  AuthHeader,
  Button,
  Container,
  CustomTextInput,
} from "../../components/shared";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "../../lib/navigation";

const Register = () => {
  const nav = useNavigation<AuthNavigationProp>();

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <Container>
      <AuthHeader
        title="Create an account"
        subTitle="Create your own little space."
        color="#E6EDDB"
      />

      <View style={styles.body}>
        <View style={styles.form}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email address must be filled!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format!",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <CustomTextInput
                field={field}
                label="Email address"
                placeholder="Input you email address..."
                error={error}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password must be filled!",
              minLength: {
                value: 8,
                message: "Password must atleast 8 characters!",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <CustomTextInput
                field={field}
                label="Password"
                type="password"
                placeholder="Input you password..."
                error={error}
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            rules={{
              required: "Confirm password must be filled!",
              validate: (value) =>
                value === getValues("password") ||
                "Password confirmation failed!",
            }}
            render={({ field, fieldState: { error } }) => (
              <CustomTextInput
                field={field}
                label="Confirm Password"
                placeholder="Confirm your password..."
                type="password"
                error={error}
              />
            )}
          />
        </View>

        <View style={styles.box}>
          <Text style={styles.quotes}>Your space, your choice.</Text>

          <Text style={styles.subQuotes}>
            Connect with a partner when you’re ready. Your diary stays private.
          </Text>
        </View>

        <Button
          label="Create account"
          onPress={handleSubmit((data) =>
            nav.navigate("VerifyEmail", {
              email: data.email,
            }),
          )}
        />

        <View style={styles.logInContainer}>
          <Text style={styles.logInLabel}>Already have an account? </Text>

          <TouchableOpacity>
            <Text style={styles.logInLabel}>Log in</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.privacyContainer}>
          <Text style={styles.logInLabel}>Privacy overview</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  form: {
    gap: 24,
  },
  box: {
    paddingTop: 15,
    paddingHorizontal: 17,
    paddingBottom: 9,
    backgroundColor: "#E6EDDB",
    borderRadius: 20,
    gap: 6,
    marginBottom: 32,
    marginTop: 30,
  },
  quotes: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "900",
    color: "#352F39",
  },
  subQuotes: {
    fontFamily: "NunitoSans",
    fontSize: 13,
    color: "#493B45",
  },
  logInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
    paddingVertical: 14,
  },
  logInLabel: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "900",
    color: "#453941",
  },
  privacyContainer: {
    alignSelf: "center",
    paddingVertical: 14,
  },
});
