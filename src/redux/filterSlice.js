import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilterStatus } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
