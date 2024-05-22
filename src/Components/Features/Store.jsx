import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice"
export const store = configureStore({
    reducer:{
        product:ProductReducer
    }
})