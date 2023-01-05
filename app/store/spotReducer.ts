import { SpotState } from "./spotState";
import {
  CLEAR_SPOTS,
  COMPLETED,
  FILL_SPOTS,
  SET_SPOT,
  START,
  UNSET_SPOT,
} from "./spotTypes";

const INITIAL_STATE = new SpotState();

export const spotReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_SPOT: {
      return {
        ...state,
        selectedSpots: [...state.selectedSpots, action.payload],
      };
    }

    case UNSET_SPOT: {
      const spots = state.selectedSpots;
      const index = spots.findIndex((el) => el == action.payload);
      if (index > -1) spots.splice(index, 1);

      return { ...state, selectedSpots: [...spots] };
    }

    case FILL_SPOTS: {
      return { ...state, selectedSpots: action.payload };
    }

    case CLEAR_SPOTS: {
      return { ...state, selectedSpots: [] };
    }

    case START: {
      return {
        ...state,
        completed: false,
        selectedSpots: [],
        correctSpots: [],
      };
    }

    case COMPLETED: {
      return { ...state, completed: true, correctSpots: [...action.payload] };
    }

    default: {
      return state;
    }
  }
};
