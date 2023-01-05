import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Popular from "../components/buttons/popular";
import Submit from "../components/buttons/submit";
import { MAX_SPOTS, POPULAR_STAKES, POSSIBLE_SPOTS } from "../constants/global";
import { completeGame, startGame } from "../store/spotAction";
import { SpotState } from "../store/spotState";
import { vh } from "../utils/dimension";
import { generateRandoms } from "../utils/helpers";
import { colors } from "../utils/styles";

const Stake = () => {
  const selectedSpots = useSelector((state: SpotState) => state.selectedSpots);
  const completed = useSelector((state: SpotState) => state.completed);

  const dispatch = useDispatch();

  const [stake, setStake] = useState("0");
  const [focused, setFocused] = useState(false);

  const popularStake = (stake) => setStake(stake);

  const submit = () => {
    setStake("0");

    const correctSpots = generateRandoms(POSSIBLE_SPOTS, MAX_SPOTS);

    Alert.alert("Bet Done, Checkout Results...!!!");

    dispatch(completeGame(correctSpots));
  };

  const replay = () => {
    dispatch(startGame());
  };

  return completed ? (
    <View style={styles.replayContainer}>
      <View style={[styles.row]}>
        <View style={styles.row}>
          <View style={[styles.circle, styles.selected]} />
          <Text>Selected</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.circle, styles.correct]} />
          <Text>Correct</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.circle, styles.success]} />
          <Text>Selected & Correct</Text>
        </View>
      </View>

      <Submit title="RePlay" handler={replay} active />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.selected} />

      <Text style={styles.header}>Popular Stakes</Text>
      <View style={styles.row}>
        {POPULAR_STAKES.map((stake, i) => (
          <Popular value={stake} key={i} handler={popularStake} />
        ))}
      </View>

      <TextInput
        value={`$${stake}`}
        placeholder="Enter stake value"
        onChangeText={(value: string) =>
          setStake(Number(value.slice(1)).toString())
        }
        style={[styles.input, focused ? styles.inputFocus : styles.inputBlur]}
        keyboardType="numeric"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      <Submit
        title="Place Bet"
        handler={submit}
        active={stake !== "0" && selectedSpots.length == MAX_SPOTS}
      />
    </View>
  );
};

export default Stake;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 21,
    fontWeight: "700",
  },
  input: {
    borderColor: colors.darkBlue,
    borderRadius: 5,
    borderWidth: 2,
    height: vh(5),
    marginTop: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  inputFocus: {
    borderColor: colors.darkBlue,
  },
  inputBlur: {
    borderColor: colors.darkGrey,
  },
  replayContainer: {
    marginVertical: 10,
  },
  circle: {
    borderRadius: 10,
    borderWidth: 10,
    width: 2,
    marginRight: 5,
  },
  selected: {
    borderColor: colors.blue,
  },
  correct: {
    borderColor: colors.green,
  },
  success: {
    borderColor: colors.yellow,
  },
});
