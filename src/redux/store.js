import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger'
import dataSlice from './slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from "redux-persist/lib/stateReconciler/hardSet"; // ADDED

const persistConfig = {
  key: 'root',
  storage,
  debug: true,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, dataSlice);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(createLogger())
});

const persistor = persistStore(store);

export { store, persistor };