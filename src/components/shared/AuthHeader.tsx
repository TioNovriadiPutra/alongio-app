import { useNavigation } from "@react-navigation/native";
import { ArrowLeft2 } from "iconsax-react-nativejs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  subTitle: string;
  color: string;
};

const AuthHeader = ({ title, subTitle, color }: Props) => {
  const nav = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => nav.goBack()}>
          <ArrowLeft2 size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 54,
    paddingBottom: 18,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 26,
    fontWeight: "900",
    color: "#352F39",
    textAlign: "center",
  },
  subTitle: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#493B45",
  },
  button: {
    position: "absolute",
    zIndex: 999,
  },
  header: {
    justifyContent: "center",
    marginBottom: 8,
  },
});
