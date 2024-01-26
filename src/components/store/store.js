// Store would bring your actions and reducers together and hold the application state.

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        cart: cartSlice, //This property cart would hold the cartSlice logic
    }
})

export default store;