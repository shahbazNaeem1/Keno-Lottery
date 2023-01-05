import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { vh } from "../../utils/dimension";
import { colors } from "../../utils/styles";

type Props = {
  active: boolean | null | undefined;
  handler: any;
  title: string;
};

const Submit = (props: Props) => {
  const { active, handler, title } = props;

  return (
    <TouchableOpacity
      style={[styles.container, !active && styles.disabled]}
      onPress={handler}
      disabled={!active}
    >
      <Text style={styles.content}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Submit;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.blue,
    borderColor: colors.darkBlue,
    borderWidth: 3,
    borderRadius: 5,
    height: vh(5),
    justifyContent: "center",
    width: "100%",
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
