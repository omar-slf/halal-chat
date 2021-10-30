import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        roomId: 0,
    },
    reducers: {
        increment: state => {
            state.value +=1;
        },

        decrement: state => {
            state.value -= 1;
        }
        incrementByAmount
    }
})