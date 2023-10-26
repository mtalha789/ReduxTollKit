import { configureStore } from "@reduxjs/toolkit";
import creditReducers from './amountSlice'

export const store = configureStore({reducer:creditReducers});