// If you click add to cart, take to cart component
// This is also where the logic for the application is present

import { createSlice } from "@reduxjs/toolkit";
const initialState = []; // The initial state is empty

const cartSlice = createSlice({
name : 'cart',
initialState,
reducers: {
    add(state, action){
        state.push(action.payload)
    },    //it would take state and your action and then it would do state update
          //whatever data i get, i would update and add to my state
          //action.payload is the data that is to be pushed to the state

      remove(state, action){
        return state.filter(item => item.id !== action.payload) //if the item.id is not equal to the data passed (then delete)
      }    

}
})
export const {add, remove} = cartSlice.actions;  //exporting the add actions (functions)
export default cartSlice.reducer;       // This would give us the state