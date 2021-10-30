import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        roomId: null,
    },
    reducers: {
        enterRoom: (action, payload) => {
            state.roomId = action.payload.roomId
        },
    }
})

export const {enterRoom} = appSlice.actions

export const selectRoomId = state => state.app.

export default