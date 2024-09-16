import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/store/slices/counter.slice";
import accountReducer from "@/store/slices/account.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  account: accountReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
});

export const persistor = persistStore(store);
