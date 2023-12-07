import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: ['Task 1'],
};

export const tasks = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const {items: tasksList} = state;
      state.items = [...tasksList, action.payload];
    },
  },
});

export const {addTask} = tasks.actions;
