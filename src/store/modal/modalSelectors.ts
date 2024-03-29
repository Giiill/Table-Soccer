export type ModalState = {
    isAuthModalOpen: boolean;
    isRegisterModalOpen: boolean;
  };
  
  export const selectModalStatus = (state: { modalSlice: ModalState }) => state.modalSlice;