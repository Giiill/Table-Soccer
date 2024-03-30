import { createSlice } from "@reduxjs/toolkit";

type tournirSliceSchema = {
    tournirName: string,
}

const initialState: tournirSliceSchema = {
    tournirName: '',
};

const tournirSlice = createSlice({
    name: 'tournirName',
    initialState,
    reducers: {
        setTournirName: (state, action) => {
            state.tournirName = action.payload;
        },

        ressetTournirName: (state) => {
            state.tournirName = '';
        }
    }
});

export const {
    reducer: tournirSliceReducer,
    actions: tournirSliceActions,
} = tournirSlice;