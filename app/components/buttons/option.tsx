import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { vw } from "../../utils/dimension";
import { colors } from "../../utils/styles";

type Props = {
  value: string | number;
  toggle: any;
  selected?: boolean | null | undefined;
  success?: boolean | null | undefined;
  completed?: boolean | null | undefined;
};

const Option = (props: Props) => {
  const { value, toggle, selected, success, completed } = props;

  return (
    <TouchableOpacity
      onPress={() => toggle(value)}
      style={[
        styles.container,
        selected && styles.btnSelected,
        completed && success && styles.btnSuccess,
        completed && success && selected && styles.btnCorrect,
      ]}
    >
      <Text
        style={[
          styles.content,
          selected && styles.btnSelected,
          completed && success && styles.btnSuccess,
          completed && success && selected && styles.btnCorrect,
        ]}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.grey,
    borderColor: colors.darkGrey,
    borderWidth: 3,
    borderRadius: 5,
    color: colors.solidGrey,
    height: vw(8),
    justifyContent: "center",
    width: vw(8),
    marginTop: "1%",
    marginLeft: 1,
  },
  content: {
    fontWeight: "600",
  },
  btnSelected: {
    backgroundColor: colors.blue,
    borderColor: colors.darkBlue,
    color: colors.white,
  },
  btnSuccess: {
    backgroundColor: colors.green,
    borderColor: colors.darkGreen,
    color: colors.white,
  },
  btnCorrect: {
    backgroundColor: colors.yellow,
    borderColor: colors.darkYellow,
    color: colors.white,
  },
});
