import {configureStore} from '@reduxjs/toolkit';
import {tasks} from './tasks/tasks';

export const store = configureStore({
  reducer: {
    tasks: tasks.reducer,
  },
});

export type StoreDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
