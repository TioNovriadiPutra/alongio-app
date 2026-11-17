import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  AuthHeader,
  Container,
  CustomDropdown,
  CustomTextInput,
} from "../../../components/shared";
import { Controller, useForm } from "react-hook-form";
import { ForDropdown } from "../../../components/custom";

const TinyPlannerAddReminder = () => {
  const { control } = useForm({
    defaultValues: {
      task_name: "",
      for: "",
    },
  });

  return (
    <Container>
      <AuthHeader
        title="One-time reminder"
        subTitle="A reminder for one specific moment."
        color="#E2EDF2"
      />

      <View style={styles.body}>
        <Controller
          control={control}
          name="task_name"
          render={({ field }) => (
            <CustomTextInput field={field} label="What needs a reminder?" />
          )}
        />

        <Controller
          control={control}
          name="for"
          render={({ field }) => <ForDropdown field={field} />}
        />
      </View>
    </Container>
  );
};

export default TinyPlannerAddReminder;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
});
