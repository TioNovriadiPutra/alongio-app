import { Image } from "expo-image";
import { ArrowRight2 } from "iconsax-react-nativejs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MePersonalSpace = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your spaces</Text>

      <View style={styles.content}>
        <TouchableOpacity style={styles.mySpaceButton}>
          <Image
            source={require("../../../assets/images/bird.webp")}
            style={styles.vector}
          />

          <View style={styles.labelContainer}>
            <Text style={styles.buttonTitle}>My world</Text>

            <Text style={styles.buttonSubTitle}>Personal · only you</Text>
          </View>

          <ArrowRight2 size={16} color="#453941" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareSpaceButton}>
          <Image
            source={require("../../../assets/images/star.webp")}
            style={styles.vector}
          />

          <View style={styles.labelContainer}>
            <Text style={styles.buttonTitle}>Our shared world</Text>

            <Text style={styles.buttonSubTitle}>Shared with Tio</Text>
          </View>

          <ArrowRight2 size={16} color="#453941" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MePersonalSpace;

const styles = StyleSheet.create({
  container: {
    gap: 11,
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 20,
    fontWeight: "800",
    color: "#352F39",
  },
  content: {
    gap: 6,
  },
  mySpaceButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: "#E6EDDB",
    borderRadius: 20,
    gap: 14,
  },
  shareSpaceButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: "#F4E0D0",
    borderRadius: 20,
    gap: 14,
  },
  vector: {
    width: 40,
    height: 40,
  },
  buttonTitle: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "700",
    color: "#352F39",
  },
  labelContainer: {
    flex: 1,
    gap: 6,
  },
  buttonSubTitle: {
    fontFamily: "NunitoSans",
    fontSize: 13,
    color: "#493B45",
  },
});
