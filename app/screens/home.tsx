import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import HalfButton from "../components/buttons/half-button";
import Divider from "../components/divider";
import { MAX_SPOTS, POSSIBLE_SPOTS } from "../constants/global";
import Board from "../containers/board";
import Stake from "../containers/stake";
import { clearSpots, fillSpots } from "../store/spotAction";
import { SpotState } from "../store/spotState";
import { generateRandoms } from "../utils/helpers";
import { colors } from "../utils/styles";

const Home = () => {
  const completed = useSelector((state: SpotState) => state.completed);

  const dispatch = useDispatch();

  const pickRandomSpots = () => {
    dispatch(clearSpots());

    const spots = generateRandoms(POSSIBLE_SPOTS, MAX_SPOTS);

    dispatch(fillSpots(spots));
  };

  const clearSelection = () => dispatch(clearSpots());

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Keno Lottery</Text>
      <View>
        {completed ? (
          <Text style={styles.headerContent}>Results</Text>
        ) : (
          <Text style={styles.headerContent}>
            Select <Text style={{ color: colors.darkRed }}>{MAX_SPOTS}</Text>{" "}
            spots
          </Text>
        )}
      </View>
      <Divider />
      <Board />
      <View style={styles.btnContainer}>
        <HalfButton
          title="Clear Selection"
          handler={clearSelection}
          disabled={completed}
        />
        <HalfButton
          title="Lucky Pick"
          handler={pickRandomSpots}
          disabled={completed}
        />
      </View>
      <Stake />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "700",
    marginVertical: "5%",
  },
  headerContent: {
    fontWeight: "700",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "2%",
  },
});
