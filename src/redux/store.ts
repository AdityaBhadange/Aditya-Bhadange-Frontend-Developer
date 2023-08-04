import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { spaceXApi } from './api';
import { getDefaultCompilerOptions } from 'typescript';

export const store = configureStore({
  reducer: {
    [spaceXApi.reducerPath]: spaceXApi.reducer
  },
  middleware: (getDefaultCompilerMiddleware) =>
    getDefaultCompilerMiddleware().concat(spaceXApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
