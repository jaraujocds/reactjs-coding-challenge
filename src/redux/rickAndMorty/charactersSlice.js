import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCharacter, getCharacters } from "../../services/rickAndMorty";

const initialState = {
  pagination: {},
  pending: false,
  characters: [],
  currentCharacter: {},
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (page, { rejectWithValue }) => {
    try {
      const response = await getCharacters(page);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);

export const fetchCharacter = createAsyncThunk(
  "characters/fetchCharacter",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCharacter(id);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.error = null;
        state.pending = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.error = null;
        state.pending = false;
        state.characters = action.payload?.results;
        state.pagination = action.payload?.info;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.error = action.payload;
        state.pending = false;
      })
      .addCase(fetchCharacter.pending, (state) => {
        state.error = null;
        state.pending = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.error = null;
        state.pending = false;
        state.currentCharacter = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.error = action.payload;
        state.pending = false;
      });
  },
});

export const selectCharactersError = (state) => state.characters.error;
export const selectCharactersPending = (state) => state.characters.pending;
export const selectCharacters = (state) => state.characters.characters;
export const selectCharactersPagination = (state) =>
  state.characters.pagination;
export const selectCurrentCharacter = (state) =>
  state.characters.currentCharacter;

export default charactersSlice.reducer;
