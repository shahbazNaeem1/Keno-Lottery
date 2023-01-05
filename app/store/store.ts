import { createStore } from "redux";
import { spotReducer } from "./spotReducer";

const rootReducer = spotReducer;

export const store = createStore(rootReducer);
