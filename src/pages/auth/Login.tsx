import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  AuthHeader,
  Button,
  Container,
  CustomTextInput,
} from "../../components/shared";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "../../lib/navigation";

const Login = () => {
  const nav = useNavigation<AuthNavigationProp>();

  const { control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Container>
      <AuthHeader
        title="Welcome back"
        subTitle="Your little world is waiting."
        color="#ECE3F2"
      />

      <View style={styles.body}>
        <Image
          source={require("../../../assets/images/bird.webp")}
          style={styles.vector}
        />

        <View style={styles.form}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <CustomTextInput
                field={field}
                label="Email"
                placeholder="Input your email..."
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <CustomTextInput
                field={field}
                label="Password"
                type="password"
                placeholder="Input your password..."
              />
            )}
          />
        </View>

        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotLabel}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <Button label="Log in" />

        <View style={styles.footerContainer}>
          <Text style={styles.footerLabel}>New here? </Text>

          <TouchableOpacity onPress={() => nav.navigate("Register")}>
            <Text style={styles.footerLabel}>Create an account</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.quotes}>Your personal space stays private.</Text>
      </View>
    </Container>
  );
};

export default Login;

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
    marginBottom: 23,
  },
  form: {
    gap: 24,
  },
  forgotContainer: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
    paddingVertical: 14,
  },
  forgotLabel: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "900",
    color: "#352F39",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 48,
    paddingVertical: 14,
  },
  footerLabel: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "900",
    color: "#453941",
  },
  quotes: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    color: "#493B45",
    textAlign: "center",
  },
});
