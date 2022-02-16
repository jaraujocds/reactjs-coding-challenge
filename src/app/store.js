import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "../redux/rickAndMorty/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
