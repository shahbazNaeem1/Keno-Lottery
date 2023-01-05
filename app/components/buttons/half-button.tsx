import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimension";
import { colors } from "../../utils/styles";

type Props = {
  disabled: boolean;
  title: string | number;
  handler: any;
};

const HalfButton = (props: Props) => {
  const { disabled, handler, title } = props;

  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={handler}
      disabled={disabled}
    >
      <Text style={styles.content}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HalfButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.red,
    borderColor: colors.darkRed,
    borderWidth: 3,
    borderRadius: 5,
    height: vh(5),
    justifyContent: "center",
    width: vw(42),
    marginTop: "2%",
  },
  content: {
    color: colors.white,
    fontWeight: "600",
  },
  disabled: {
    backgroundColor: colors.grey,
    borderColor: colors.darkGrey,
  },
});
