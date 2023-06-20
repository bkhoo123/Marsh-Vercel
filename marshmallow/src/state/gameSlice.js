import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lobby: 1,
  players: [],

}

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setLobby: (state, action) => {
      state.lobby = action.payload
    }
  }
})

export default gameSlice.reducer