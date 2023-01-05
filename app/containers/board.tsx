import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Option from "../components/buttons/option";
import { MAX_SPOTS, POSSIBLE_SPOTS } from "../constants/global";
import { setSpot, unsetSpot } from "../store/spotAction";
import { SpotState } from "../store/spotState";

const Board = () => {
  const selectedSpots = useSelector((state: SpotState) => state.selectedSpots);
  const correctSpots = useSelector((state: SpotState) => state.correctSpots);
  const completed = useSelector((state: SpotState) => state.completed);

  const dispatch = useDispatch();

  const toggleOption = (option: number) => {
    const selected = selectedSpots.includes(option);

    if (!selected && selectedSpots.length >= 5)
      return Alert.alert(`You can select ${MAX_SPOTS} spots...!!!`);

    dispatch(selected ? unsetSpot(option) : setSpot(option));
  };

  return (
    <View style={styles.row}>
      {[...Array(POSSIBLE_SPOTS)].map((_, i) => (
        <Option
          value={i + 1}
          key={i}
          toggle={toggleOption}
          selected={selectedSpots?.findIndex((el) => el == i + 1) > -1}
          success={correctSpots.includes(i + 1)}
          completed={completed}
        />
      ))}
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
