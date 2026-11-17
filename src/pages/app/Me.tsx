import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Container } from "../../components/shared";
import { Image } from "expo-image";
import { MePersonalSpace } from "../../components/custom";

const Me = () => {
  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>Me</Text>

        <Text style={styles.quotes}>Your life, at your pace.</Text>

        <View style={styles.profileHero}>
          <View style={styles.box}>
            <Image
              source={require("../../../assets/images/bird.webp")}
              style={styles.profileVector}
            />
          </View>

          <View style={styles.profile}>
            <Text style={styles.name}>Naura</Text>

            <Text style={styles.level}>Level 04 · Little explorer</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.body}>
        <MePersonalSpace />
      </ScrollView>
    </Container>
  );
};

export default Me;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingBottom: 21,
    paddingHorizontal: 24,
    backgroundColor: "#E5D9BD",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 27,
    fontWeight: "800",
    textAlign: "center",
    color: "#352F39",
    marginBottom: 8,
  },
  quotes: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#493B45",
    marginBottom: 25,
  },
  profileHero: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "#EBD16B",
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  profileVector: {
    width: 60,
    height: 60,
  },
  profile: {
    gap: 4,
  },
  name: {
    fontFamily: "NunitoSans",
    fontSize: 24,
    fontWeight: "800",
    color: "#352F39",
  },
  level: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#453941",
  },
  body: {
    paddingTop: 17,
    paddingHorizontal: 24,
  },
});
