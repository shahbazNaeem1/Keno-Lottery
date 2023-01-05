import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { vh, vw } from "../../utils/dimension";
import { colors } from "../../utils/styles";

type Props = {
  value: string | number;
  handler: any;
};

const Popular = (props: Props) => {
  const { handler, value } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handler(value.toString())}
    >
      <Text>${value}</Text>
    </TouchableOpacity>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.darkBrown,
    borderColor: colors.brown,
    borderWidth: 3,
    borderRadius: 5,
    height: vh(5),
    justifyContent: "center",
    width: vw(17),
    marginTop: "2%",
  },
});
