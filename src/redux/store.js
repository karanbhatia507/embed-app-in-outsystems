import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import dataSlice from "./slice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet"; // ADDED
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  debug: true,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, dataSlice);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createLogger()),
});

const persistor = persistStore(store);

export { persistor, store };
