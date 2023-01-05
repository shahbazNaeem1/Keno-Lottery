import {
  CLEAR_SPOTS,
  COMPLETED,
  FILL_SPOTS,
  SET_SPOT,
  START,
  UNSET_SPOT,
} from "./spotTypes";

export const setSpot = (data: any) => ({
  type: SET_SPOT,
  payload: data,
});

export const unsetSpot = (data: any) => ({
  type: UNSET_SPOT,
  payload: data,
});

export const fillSpots = (data: Array<number>) => ({
  type: FILL_SPOTS,
  payload: data,
});

export const clearSpots = () => ({
  type: CLEAR_SPOTS,
});

export const startGame = () => ({
  type: START,
});

export const completeGame = (data: Array<number>) => ({
  type: COMPLETED,
  payload: data,
});
