import { createSlice } from '@reduxjs/toolkit';
import { PERSIST, REHYDRATE } from 'redux-persist'

export const DataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    count: 0,
  },
  reducers: {
    updateCount: (state, actions) => {
      state.count = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state) => {
      console.log('in rehydrate', state)
    }),
      builder.addCase(PERSIST, (state) => {
        console.log('in persist', state)
      });
  }
});

// Action creators are generated for each case reducer function
export const {
  updateCount,
} = DataSlice.actions

export default DataSlice.reducer