import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthModalOpen: false,
  isRegisterModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAuthModal: (state) => {
      state.isAuthModalOpen = !state.isAuthModalOpen;
    },
    toggleRegisterModal: (state) => {
      state.isRegisterModalOpen = !state.isRegisterModalOpen;
    },
  },
});

export const {
  reducer: modalSliceReducer,
  actions: modalSliceActions,
} = modalSlice;