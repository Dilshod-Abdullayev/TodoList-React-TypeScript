import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./Mode";
import Todos from "./Todos";
const store = configureStore({
  reducer: {
    mode: modeReducer,
    todos: Todos
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
