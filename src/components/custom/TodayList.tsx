import { Notification } from "iconsax-react-nativejs";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { todayListData } from "../../lib/dummyData";
import { Image } from "expo-image";
import { formatReminderDate } from "../../lib/helper";
import { Button, CustomCheckbox } from "../shared";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "../../lib/navigation";

const WIDTH = Dimensions.get("window").width;

const TodayList = () => {
  const nav = useNavigation<AppNavigationProp>();

  return (
    <View style={styles.pageContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.box}>
          <View style={styles.boxDescription}>
            <Text style={styles.boxTitle}>For the little things</Text>

            <Text style={styles.boxSubTitle}>
              Buy milk, grab a parcel,{"\n"}or leave a little reminder.
            </Text>
          </View>

          <View style={styles.boxSmall}>
            <Notification size={20} color="#453941" />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Reminders for today</Text>

        <View style={styles.list}>
          {todayListData.map((item, index) => (
            <View
              key={index.toString()}
              style={[
                styles.card,
                {
                  backgroundColor:
                    item.status === "yellow"
                      ? "#F8EFCF"
                      : item.status === "blue"
                        ? "#E2EDF2"
                        : "#F4DED2",
                },
              ]}
            >
              <View style={styles.leftContent}>
                <View style={styles.header}>
                  <View
                    style={[
                      styles.headerBox,
                      {
                        backgroundColor:
                          item.status === "yellow"
                            ? "#F8EFCF"
                            : item.status === "blue"
                              ? "#E2EDF2"
                              : "#F4DED2",
                      },
                    ]}
                  >
                    <Image
                      source={
                        item.status === "yellow"
                          ? require("../../../assets/images/profileMe.webp")
                          : require("../../../assets/images/profilePartner.webp")
                      }
                      style={styles.profileVector}
                    />
                  </View>

                  <Text style={styles.owner}>{item.owner}</Text>
                </View>

                <View style={styles.content}>
                  <View style={styles.notifBox}>
                    <Notification size={20} color="#453941" />
                  </View>

                  <View style={styles.contentContainer}>
                    <View>
                      <Text
                        style={[
                          styles.taskName,
                          {
                            color: item.is_done ? "#66545F" : "#352F39",
                          },
                        ]}
                      >
                        {item.task_name}
                      </Text>

                      {item.is_done && <View style={styles.line} />}
                    </View>

                    <Text
                      numberOfLines={2}
                      adjustsFontSizeToFit
                      minimumFontScale={0.8}
                      style={styles.taskDue}
                    >
                      {formatReminderDate(new Date(item.task_due))}
                    </Text>
                  </View>
                </View>
              </View>

              {item.status === "yellow" && (
                <CustomCheckbox checked={item.is_done} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <Button
        label="Add reminder"
        type="info"
        onPress={() => nav.navigate("TinyPlannerAddReminder")}
      />
    </View>
  );
};

export default TodayList;

const styles = StyleSheet.create({
  pageContainer: {
    width: WIDTH - 48,
  },
  scroll: {
    paddingBottom: 18,
  },
  box: {
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 24,
    paddingBottom: 18,
    backgroundColor: "#F8EFCF",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  boxDescription: {
    gap: 7,
  },
  boxTitle: {
    fontFamily: "NunitoSans",
    fontSize: 18,
    fontWeight: "800",
    color: "#352F39",
  },
  boxSubTitle: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#352F39",
  },
  boxSmall: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDF7",
    borderRadius: 14,
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "800",
    color: "#352F39",
    marginBottom: 18,
  },
  list: {
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 28,
    borderWidth: 1,
    borderColor: "#D6C8BB",
    borderRadius: 24,
    gap: 14,
  },
  leftContent: {
    flex: 1,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerBox: {
    width: 28,
    height: 28,
    backgroundColor: "#F8EFCF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFFDF7",
    alignItems: "center",
    justifyContent: "center",
  },
  profileVector: {
    width: 24,
    height: 24,
  },
  owner: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "800",
    color: "#352F39",
  },
  content: {
    flexDirection: "row",
    gap: 20,
  },
  notifBox: {
    width: 40,
    height: 40,
    backgroundColor: "#FFFDF7",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "flex-start",
    gap: 9,
  },
  taskName: {
    fontFamily: "NunitoSans",
    fontSize: 16,
    fontWeight: "800",
  },
  taskDue: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#352F39",
  },
  line: {
    position: "absolute",
    height: 2,
    left: 0,
    right: 0,
    backgroundColor: "#66545F",
    top: "50%",
  },
});
