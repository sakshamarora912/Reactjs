import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialAuthState={isAuthenticated:false};
const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){state.isAuthenticated=true},
        logout(state){state.isAuthenticated=false}
    }
})
const initialCounterState={value:5,showCounter:true};

const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state,action){state.value+=action.payload || 1},
        decrement(state){state.value--},
        toggle(state){state.showCounter=!state.showCounter}
    }
})
export const authActions=authSlice.actions;
export const counterActions = counterSlice.actions;

const store = configureStore({
    reducer:{auth:authSlice.reducer,counter:counterSlice.reducer}
})
export default store