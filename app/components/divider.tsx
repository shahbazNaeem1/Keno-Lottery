import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../utils/styles";

const Divider = () => {
  return <View style={styles.main} />;
};

export default Divider;

const styles = StyleSheet.create({
  main: {
    borderTopWidth: 1,
    borderColor: colors.darkGrey,
    marginVertical: 10,
    width: "100%",
  },
});
