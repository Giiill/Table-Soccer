import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthModalOpen: false,
  isRegisterModalOpen: false,
  isMenuModalOpen: false,
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
    toggleMenuModal: (state) => {
      state.isMenuModalOpen = !state.isMenuModalOpen;
    },
  },
});

export const {
  reducer: modalSliceReducer,
  actions: modalSliceActions,
} = modalSlice;