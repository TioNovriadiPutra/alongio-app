import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { greetingData } from "../../lib/pageConst";
import { Button, Container } from "../../components/shared";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "../../lib/navigation";

const Greeting = () => {
  const nav = useNavigation<AuthNavigationProp>();

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>Alongio</Text>

        <Text style={styles.subTitle}>Life, in step.</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.box}>
          <View style={styles.circle}>
            <Image
              source={require("../../../assets/images/bird.webp")}
              style={styles.bird}
            />
          </View>

          <Text style={styles.tagline}>A little life. A lot to love.</Text>
        </View>

        <Text style={styles.description}>
          Your meals, money, plans and moments. Your own pace. More room for
          each other.
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.iconRow}>
          {greetingData.map((item, index) => (
            <View key={index.toString()} style={styles.iconContainer}>
              <Image source={item.icon} style={styles.icon} />

              <Text style={styles.iconLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            label="Get started"
            onPress={() => nav.navigate("Register")}
          />

          <Button
            label="I already have an account"
            type="secondary"
            onPress={() => nav.navigate("Login")}
          />
        </View>
      </View>
    </Container>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  header: {
    paddingTop: 46.5,
    alignItems: "center",
    paddingBottom: 56.5,
    backgroundColor: "#E5D9BD",
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 48,
    fontWeight: "800",
    color: "#352F39",
  },
  subTitle: {
    fontFamily: "NunitoSans",
    fontSize: 23,
    color: "#453941",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  box: {
    width: 349,
    paddingTop: 34,
    paddingBottom: 30,
    alignItems: "center",
    backgroundColor: "#5D4968",
    borderRadius: 32,
    gap: 27,
  },
  circle: {
    width: 162,
    height: 162,
    borderRadius: "50%",
    backgroundColor: "#EBD16B",
    alignItems: "center",
    justifyContent: "center",
  },
  bird: {
    width: 170,
    height: 170,
  },
  tagline: {
    fontFamily: "NunitoSans",
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF5DD",
  },
  description: {
    fontFamily: "NunitoSans",
    fontSize: 17,
    color: "#453941",
    textAlign: "center",
    maxWidth: 321,
  },
  footer: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: "#E6EDDB",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    gap: 27,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    gap: 7,
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconLabel: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    fontWeight: "700",
    color: "#453941",
    width: 105,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 15,
  },
});
