import { ArrowDown2, CloseCircle } from "iconsax-react-nativejs";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DropdownType } from "../../interfaces/formInterface";
import { ReactNode, useState } from "react";

type Props = {
  field: ControllerRenderProps<any, any>;
  label: string;
  dropdown: DropdownType[];
  dropdownTitle: string;
  dropdownSubTitle?: string;
  renderDropdown: (item: DropdownType, index: number) => ReactNode;
  error?: FieldError;
};

const CustomDropdown = ({
  field,
  label,
  dropdown,
  dropdownTitle,
  dropdownSubTitle,
  renderDropdown,
  error,
}: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>

        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>

      <TouchableOpacity
        style={[styles.inputContainer, error && styles.inputContainerError]}
        onPress={() => setShowDropdown(true)}
      >
        <Text style={styles.input}></Text>

        <ArrowDown2 size={20} color="#453941" />
      </TouchableOpacity>

      <Modal visible={showDropdown} transparent>
        <View style={styles.backdrop}>
          <View style={styles.dropdownContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>{dropdownTitle}</Text>

              <TouchableOpacity onPress={() => setShowDropdown(false)}>
                <CloseCircle size={24} color="#453941" />
              </TouchableOpacity>
            </View>

            {dropdownSubTitle && (
              <Text style={styles.subTitle}>{dropdownSubTitle}</Text>
            )}

            <View style={styles.dropdownList}>
              {dropdown.map((item, index) => (
                <TouchableOpacity key={index.toString()}>
                  {renderDropdown(item, index)}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  labelContainer: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-end",
  },
  label: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    fontWeight: "900",
    color: "#352F39",
  },
  error: {
    fontFamily: "NunitoSans",
    fontSize: 12,
    color: "red",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 17,
    backgroundColor: "#FFFDF7",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D6C8BB",
  },
  inputContainerError: {
    borderWidth: 1,
    borderColor: "red",
  },
  input: {
    flex: 1,
    fontFamily: "NunitoSans",
    fontSize: 16,
    color: "#352F39",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(69,57,65,0.4)",
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: "flex-end",
  },
  dropdownContainer: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 55,
    backgroundColor: "#FAF4E9",
    borderWidth: 1,
    borderColor: "#D6C8BB",
    borderRadius: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  title: {
    fontFamily: "NunitoSans",
    fontSize: 22,
    fontWeight: "900",
    color: "#352F39",
  },
  subTitle: {
    fontFamily: "NunitoSans",
    fontSize: 14,
    color: "#352F39",
    marginBottom: 13,
  },
  dropdownList: {
    gap: 12,
  },
});
