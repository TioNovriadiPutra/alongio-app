import { Stop, TickSquare } from "iconsax-react-nativejs";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  checked: boolean;
  onChange?: () => void;
};

const CustomCheckbox = ({ checked, onChange }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      {checked ? (
        <TickSquare size={24} color="#453941" />
      ) : (
        <Stop size={24} color="#453941" />
      )}
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
});
