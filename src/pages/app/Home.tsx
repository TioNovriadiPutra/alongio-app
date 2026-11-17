import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Container } from "../../components/shared";
import { Image } from "expo-image";
import { ArrowDown2, ArrowRight2, Lock1, Star1 } from "iconsax-react-nativejs";
import { MainMenu } from "../../components/custom";

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Alongio</Text>

            <Image
              source={require("../../../assets/images/bird.webp")}
              style={styles.vector}
            />
          </View>

          <Text style={styles.name}>Good morning, Naura.</Text>

          <TouchableOpacity style={styles.spaceButton}>
            <Lock1 size={20} color="#453941" />

            <Text style={styles.spaceLabel}>Personal · Just me</Text>

            <ArrowDown2 size={20} color="#453941" />
          </TouchableOpacity>

          <View style={styles.content}>
            <Text style={styles.quotes}>Your day.{`\n`}Your way.</Text>

            <View style={styles.circle}>
              <Image
                source={require("../../../assets/images/bird.webp")}
                style={styles.bigVector}
              />
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <MainMenu />

          <TouchableOpacity
            style={[styles.button1, { backgroundColor: "#5D4968" }]}
          >
            <Star1 size={24} color="white" />

            <View style={styles.buttonDescription}>
              <Text style={styles.buttonTitle}>TODAY'S MOMENT</Text>

              <Text style={styles.buttonSubtitle}>
                Make time for a good meal
              </Text>
            </View>

            <ArrowRight2 size={20} color="#FFF5DD" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button1, { backgroundColor: "#EBD16B" }]}
          >
            <Image
              source={require("../../../assets/images/star.webp")}
              style={styles.buttonVector}
            />

            <View style={styles.buttonDescription}>
              <Text style={styles.buttonTitle2}>
                A little nudge for your partner
              </Text>

              <Text style={styles.buttonSubtitle2}>
                Send a reminder, right when it comes to mind ›
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    paddingTop: 64,
    paddingHorizontal: 24,
    backgroundColor: "#B9CF99",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 27,
    fontWeight: "900",
    color: "#352F39",
  },
  vector: {
    position: "absolute",
    width: 48,
    height: 48,
    right: 16,
  },
  name: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#493B45",
    marginBottom: 21,
  },
  spaceButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    backgroundColor: "#FFFDF7",
    borderRadius: 16,
    marginBottom: 8,
  },
  spaceLabel: {
    fontFamily: "NunitoSans",
    fontSize: 13,
    fontWeight: 700,
    color: "#453941",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  quotes: {
    flex: 1,
    fontFamily: "NunitoSans",
    fontSize: 29,
    fontWeight: "900",
    color: "#352F39",
    marginLeft: 14,
  },
  circle: {
    width: 102,
    height: 102,
    borderRadius: "50%",
    backgroundColor: "#EBD16B",
  },
  bigVector: {
    width: 88,
    height: 88,
    marginLeft: 9,
    marginTop: 6,
  },
  body: {
    paddingTop: 12,
    paddingHorizontal: 24,
    gap: 16,
  },
  button1: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 22,
    gap: 12,
  },
  buttonDescription: {
    flex: 1,
    gap: 6,
  },
  buttonTitle: {
    fontFamily: "NunitoSans",
    fontSize: 11,
    fontWeight: "700",
    color: "#FFF5DD",
  },
  buttonSubtitle: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF5DD",
  },
  buttonVector: {
    width: 36,
    height: 36,
  },
  buttonTitle2: {
    fontFamily: "NunitoSans",
    fontSize: 15,
    fontWeight: "700",
    color: "#352F39",
  },
  buttonSubtitle2: {
    fontFamily: "NunitoSans",
    fontSize: 11,
    color: "#453941",
  },
});
