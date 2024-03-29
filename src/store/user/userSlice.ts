import { createSlice } from "@reduxjs/toolkit";

type userSliceScheme = {
    status: boolean;
};

const initialState: userSliceScheme = {
    status: false,
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setLoginStatus: (state) => {
            state.status = !state.status;
        }
    }
})

export const {
    reducer: userSliceReducer,
    actions: userSliceActions,
} = userSlice;