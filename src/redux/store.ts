import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { useDispatch, useSelector } from "react-redux";
import paginationSlice from "./slice/pagination/pagination";

const store = configureStore({
  reducer: {
    api: api.reducer,
    pagination: paginationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
export const useAppSelector = useSelector.withTypes<IRootState>();

export default store;
