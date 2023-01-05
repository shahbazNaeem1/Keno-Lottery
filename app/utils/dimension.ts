import { Dimensions } from "react-native";

export const vh = (height: number) =>
  (Dimensions.get("screen").height * height) / 100.0;

export const vw = (width: number) =>
  (Dimensions.get("screen").width * width) / 100.0;
